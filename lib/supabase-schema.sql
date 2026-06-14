-- Ejecutar en el SQL Editor de Supabase
-- Proyecto: Unidos por GPS — tabla de leads de cotización

create table public.leads (
  id            uuid        primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  nombre        text        not null,
  telefono      text        not null,
  email         text,
  servicio      text        not null,
  num_vehiculos integer     not null default 1,
  mensaje       text,
  ip_hash       text,
  source        text        not null default 'web-form'
);

alter table public.leads enable row level security;

create policy "service_role_insert_only"
  on public.leads
  for insert
  to service_role
  with check (true);

-- service_role needs explicit SELECT for dedup check (bypasses RLS but not table grants)
grant select, insert on public.leads to service_role;
