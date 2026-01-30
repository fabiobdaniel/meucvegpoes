# Cómo direccionar este proyecto a awakenyourhero.com.br

Hay dos formas de “direccionar” este proyecto hacia **awakenyourhero.com.br**:

---

## Opción 1: Redirigir visitantes a awakenyourhero.com.br (ya configurado)

Cuando alguien entra en **fabiobdaniel.com** o **www.fabiobdaniel.com**, el proyecto ya los envía a **https://awakenyourhero.com.br** (redirección 301).

Está definido en **vercel.json**:

- Si el host es `fabiobdaniel.com` → redirección a `https://awakenyourhero.com.br`
- Si el host es `www.fabiobdaniel.com` → redirección a `https://awakenyourhero.com.br`

**Qué falta por tu parte:**

1. Que **fabiobdaniel.com** esté en estado **Valid Configuration** en Vercel (DNS correcto en GoDaddy: registro A `@` = `216.198.79.1` y, si Vercel lo pide, CNAME `www`).
2. Después de que el dominio sea válido, el redireccionamiento funcionará solo: quien entre en fabiobdaniel.com irá a awakenyourhero.com.br.

No hace falta cambiar código para esta opción; solo DNS y dominio válido en Vercel.

---

## Opción 2: Que awakenyourhero.com.br muestre ESTE proyecto (este portfolio)

Si quieres que **awakenyourhero.com.br** sea la URL donde se ve este mismo sitio (este proyecto):

1. En **Vercel** → tu proyecto → **Settings** → **Domains**.
2. Pulsa **Add** y añade:
   - `awakenyourhero.com.br`
   - `www.awakenyourhero.com.br` (si lo usas).
3. Vercel te mostrará qué registros DNS debes crear (A y/o CNAME).
4. En el proveedor donde está registrado **awakenyourhero.com.br** (GoDaddy, Registro.br, etc.), crea o edita los registros DNS con los valores que indica Vercel.
5. Espera la propagación; en Vercel el dominio pasará a **Valid Configuration**.

Así, **awakenyourhero.com.br** apuntará a este mismo deploy y mostrará este portfolio.

---

## Resumen

| Objetivo | Qué hacer |
|----------|------------|
| **Redirigir fabiobdaniel.com → awakenyourhero.com.br** | Ya está en `vercel.json`. Solo asegura que fabiobdaniel.com esté en Vercel con DNS correcto (A = 216.198.79.1, etc.). |
| **Que awakenyourhero.com.br muestre este proyecto** | Añade awakenyourhero.com.br (y www) en **Domains** del proyecto en Vercel y configura DNS donde está registrado el dominio. |

Si quieres también que la URL por defecto de Vercel (**meucvegpoes-qi8a.vercel.app**) redirija a awakenyourhero.com.br, se puede añadir otra regla en **vercel.json**; dímelo y la indico.
