# Redirecionar fabiobdaniel.com → awakenyourhero.com.br

Existem duas formas principais. Use a que se encaixa no seu caso.

---

## Opção 1: Encaminhamento no GoDaddy (mais simples)

Se **fabiobdaniel.com** está no GoDaddy e você quer que o domínio apenas redirecione (sem usar Vercel para esse domínio):

1. Acesse **https://sso.godaddy.com** e faça login.
2. Em **Meus Produtos**, encontre **fabiobdaniel.com** e clique em **Gerenciar** (ou nos 3 pontinhos → **Gerenciar**).
3. Role até **Encaminhamento de domínio** / **Domain Forwarding**.
4. Clique em **Adicionar** ou **Configurar**.
5. Defina:
   - **Domínio a encaminhar:** `fabiobdaniel.com` (e, se existir, `www.fabiobdaniel.com`).
   - **Encaminhar para:** `https://awakenyourhero.com.br`
   - **Tipo:** Redirecionamento permanente (301), se a opção existir.
6. Salve e aguarde a propagação (minutos a algumas horas).

**Observação:** Com encaminhamento ativo, o GoDaddy pode alterar os registros DNS (por exemplo, A para a página de redirecionamento). Se hoje **fabiobdaniel.com** aponta para o Vercel, você pode preferir a Opção 2 para manter o DNS atual e redirecionar pelo Vercel.

---

## Opção 2: Redirecionamento no Vercel (mantendo DNS atual)

Se **fabiobdaniel.com** e **www.fabiobdaniel.com** continuam apontando para este projeto no Vercel (via DNS no GoDaddy como no `GODADDY_DNS_SETUP.md`), o redirecionamento pode ser feito no próprio Vercel.

Foi adicionada uma configuração em **vercel.json** que:

- Redireciona todo o tráfego de **fabiobdaniel.com** e **www.fabiobdaniel.com** para **https://awakenyourhero.com.br**.
- Usa redirecionamento **301** (permanente), bom para SEO.
- Mantém o caminho: por exemplo, `fabiobdaniel.com/contato` → `awakenyourhero.com.br/contato`.

Depois de fazer o deploy no Vercel, basta manter o DNS do GoDaddy como está; quem acessar fabiobdaniel.com será enviado para awakenyourhero.com.br.

---

## Se os dois domínios estiverem no mesmo projeto Vercel

Se **fabiobdaniel.com** e **awakenyourhero.com.br** estiverem no **mesmo** projeto no Vercel, o **vercel.json** já está preparado para redirecionar **somente** quando o host for `fabiobdaniel.com` ou `www.fabiobdaniel.com`. O site principal continua sendo exibido quando o acesso for por **awakenyourhero.com.br**.

---

## Resumo

| Situação | O que fazer |
|----------|-------------|
| Só quer redirecionar e não usa Vercel para fabiobdaniel.com | **Opção 1** – Encaminhamento no GoDaddy |
| fabiobdaniel.com já aponta para este projeto no Vercel | **Opção 2** – Usar o **vercel.json** e fazer deploy |
| Os dois domínios no mesmo projeto Vercel | **Opção 2** – O **vercel.json** já trata por host |

Depois de aplicar uma das opções, teste:

- https://fabiobdaniel.com  
- https://www.fabiobdaniel.com  

Ambos devem abrir **https://awakenyourhero.com.br**.
