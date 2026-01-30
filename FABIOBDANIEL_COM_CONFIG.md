# Por que fabiobdaniel.com não funciona igual ao Vercel

No **meucvegpoes-qi8a.vercel.app** o site carrega com formatação e botões corretos. No **fabiobdaniel.com** a página aparece mas **sem CSS** (botões sem estilo, layout quebrado).

Isso acontece quando **fabiobdaniel.com não está servido pelo mesmo projeto no Vercel**. Ou o domínio não está adicionado ao projeto, ou o DNS ainda aponta para outro lugar (GoDaddy, outro host, etc.) e aí você vê uma versão antiga ou incompleta do site.

---

## Solução: usar o mesmo deploy do Vercel em fabiobdaniel.com

Siga estes passos para **fabiobdaniel.com** mostrar exatamente o mesmo site que **meucvegpoes-qi8a.vercel.app**.

### 1. Adicionar o domínio no projeto do Vercel

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard).
2. Abra o projeto que tem a URL **meucvegpoes-qi8a.vercel.app** (o mesmo que está funcionando).
3. Vá em **Settings** → **Domains**.
4. Em **Add**, adicione:
   - `fabiobdaniel.com`
   - `www.fabiobdaniel.com`
5. Salve. O Vercel vai mostrar os valores de DNS que você deve usar (registro **A** e **CNAME**). Anote ou deixe a tela aberta.

### 2. Configurar o DNS no GoDaddy

1. Acesse [sso.godaddy.com](https://sso.godaddy.com) e faça login.
2. Em **Meus Produtos**, abra **fabiobdaniel.com** → **Gerenciar** → **DNS** (ou **Manage DNS**).
3. Ajuste os registros para os valores que o **Vercel** mostrou ao adicionar o domínio:
   - **Registro A**  
     - Nome: `@`  
     - Valor: o IP que o Vercel indicar (ex.: `76.76.21.21` – use sempre o que aparecer no painel do Vercel).
   - **Registro CNAME** para `www`  
     - Nome: `www`  
     - Valor: o endereço que o Vercel indicar (ex.: `cname.vercel-dns.com` ou algo como `xxx.vercel-dns-xxx.com` – use o valor exato do Vercel).
4. Remova ou desative **encaminhamento de domínio** (Domain Forwarding) para fabiobdaniel.com, se estiver ativo. Caso contrário, o GoDaddy pode continuar mostrando outra página em vez do site do Vercel.
5. Salve as alterações.

### 3. Aguardar e testar

- A propagação do DNS pode levar de alguns minutos a algumas horas.
- No Vercel, em **Settings** → **Domains**, os domínios devem ficar com status **Valid Configuration** quando estiver tudo certo.
- Depois, abra **https://fabiobdaniel.com** e **https://www.fabiobdaniel.com** – o site deve aparecer igual ao **meucvegpoes-qi8a.vercel.app** (com botões e formatação corretos).

---

## Resumo

| O que está acontecendo | O que fazer |
|------------------------|-------------|
| fabiobdaniel.com abre mas sem CSS | O domínio não está no mesmo projeto Vercel (ou o DNS não aponta para o Vercel). |
| Solução | Adicionar fabiobdaniel.com e www no projeto no Vercel e configurar no GoDaddy **exatamente** os valores que o Vercel mostrar. Desativar encaminhamento de domínio no GoDaddy para fabiobdaniel.com. |

Depois disso, **fabiobdaniel.com** e **meucvegpoes-qi8a.vercel.app** passam a servir o mesmo deploy e o site funciona igual nos dois.

---

## Sobre o redirecionamento para awakenyourhero.com.br

No **vercel.json** do projeto há redirecionamentos que mandam **fabiobdaniel.com** e **www.fabiobdaniel.com** para **awakenyourhero.com.br**. Quando o domínio estiver configurado no Vercel como acima:

- Se você **quiser** que quem acesse fabiobdaniel.com vá direto para awakenyourhero.com.br, pode deixar esses redirects como estão.
- Se você **quiser** que fabiobdaniel.com mostre o portfólio (como o meucvegpoes-qi8a.vercel.app), aí é preciso **remover** esses redirects do **vercel.json** e fazer um novo deploy.

Ou seja: primeiro garanta que o domínio e o DNS estejam corretos (passos 1 e 2); depois decida se quer redirecionar para awakenyourhero.com.br ou exibir o portfólio em fabiobdaniel.com e ajuste o **vercel.json** conforme essa escolha.
