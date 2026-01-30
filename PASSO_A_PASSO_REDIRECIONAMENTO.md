# Passo a passo: redirecionar fabiobdaniel.com para awakenyourhero.com.br

Siga estes passos na ordem. O projeto já está configurado para redirecionar; falta apenas o DNS e a validação no Vercel.

---

## Parte 1 – Configurar o domínio fabiobdaniel.com no Vercel

### Passo 1.1 – Abrir o projeto no Vercel

1. Acesse **https://vercel.com** e faça login.
2. No painel, clique no projeto que tem a URL **meucvegpoes-qi8a.vercel.app** (este projeto).
3. No menu do projeto, clique em **Settings** (Configurações).
4. No menu lateral, clique em **Domains** (Domínios).

### Passo 1.2 – Adicionar fabiobdaniel.com (se ainda não estiver)

1. Se **fabiobdaniel.com** ainda não aparecer na lista:
   - Clique em **Add** (ou **Add Existing**).
   - Digite **fabiobdaniel.com** e confirme.
2. Repita para **www.fabiobdaniel.com** se o Vercel pedir ou se quiser que www também redirecione.
3. Deixe a tela de **Domains** aberta; você vai precisar dos valores de DNS que aparecem aí (aba **DNS Records**).

### Passo 1.3 – Anotar os valores de DNS

1. Na página **Domains**, clique em **fabiobdaniel.com**.
2. Abra a aba **DNS Records**.
3. Anote:
   - **Registro A:** Name = `@`, Value = (o IP que o Vercel mostrar; costuma ser **216.198.79.1**).
   - **Registro CNAME** (para www): Name = `www`, Value = (o endereço que o Vercel mostrar; pode ser algo como **cname.vercel-dns.com** ou **xxx.vercel-dns-xxx.com**).
4. Use sempre os valores que aparecem **na sua tela** do Vercel.

---

## Parte 2 – Configurar o DNS no GoDaddy (fabiobdaniel.com)

### Passo 2.1 – Entrar no DNS do domínio

1. Acesse **https://sso.godaddy.com** e faça login.
2. Clique em **Meus Produtos** (ou **My Products**).
3. Encontre **fabiobdaniel.com** e clique em **DNS** ou em **Gerenciar** → **DNS** (ou **Manage DNS**).
4. Você verá a lista de **Records** (Registros DNS).

### Passo 2.2 – Configurar o registro A (@)

1. Procure se já existe um registro do tipo **A** com **Name** = **@**.
2. **Se existir:**
   - Clique nos **três pontinhos (⋮)** ao lado desse registro.
   - Clique em **Edit** (Editar).
   - No campo **Value** (ou **Points to**), coloque: **216.198.79.1** (ou o IP que o Vercel mostrou no Passo 1.3).
   - Clique em **Save** (Salvar).
3. **Se NÃO existir:**
   - Clique em **Add** (ou **+ Add Record**).
   - **Type:** selecione **A**.
   - **Name:** digite **@**.
   - **Value:** digite **216.198.79.1** (ou o IP do Vercel).
   - **TTL:** deixe **1 Hour** (ou padrão).
   - Clique em **Save**.

### Passo 2.3 – Configurar o registro CNAME (www)

1. Procure se já existe um registro do tipo **CNAME** com **Name** = **www**.
2. **Se existir:**
   - Clique nos **três pontinhos (⋮)** → **Edit**.
   - No campo **Points to** (ou **Value**), coloque o valor que você anotou no Vercel (ex.: **cname.vercel-dns.com**).
   - Clique em **Save**.
3. **Se NÃO existir:**
   - Clique em **Add** (ou **+ Add Record**).
   - **Type:** selecione **CNAME**.
   - **Name:** digite **www**.
   - **Value** (ou **Points to**): digite o valor que o Vercel mostrou (ex.: **cname.vercel-dns.com**).
   - **TTL:** 1 Hour (ou padrão).
   - Clique em **Save**.

### Passo 2.4 – Desativar encaminhamento de domínio (se existir)

1. Ainda no painel do **fabiobdaniel.com** no GoDaddy, procure por **Encaminhamento de domínio** ou **Domain Forwarding**.
2. Se estiver ativo para fabiobdaniel.com, **desative** ou remova, para não conflitar com o DNS do Vercel.

---

## Parte 3 – Validar no Vercel

### Passo 3.1 – Atualizar o status do domínio

1. Volte ao Vercel: **Settings** → **Domains**.
2. Clique em **fabiobdaniel.com**.
3. Clique no botão **Refresh** (Atualizar).
4. O status pode continuar **Invalid Configuration** por alguns minutos; espere a propagação do DNS (geralmente 15 minutos a 2 horas).

### Passo 3.2 – Conferir quando estiver válido

1. Quando o status mudar para **Valid Configuration**, o domínio está correto.
2. Acesse no navegador: **https://fabiobdaniel.com** e **https://www.fabiobdaniel.com**.
3. Você deve ser **redirecionado** para **https://awakenyourhero.com.br**.

---

## Resumo rápido

| Onde       | O que fazer |
|-----------|-------------|
| **Vercel** | Garantir que fabiobdaniel.com (e www) estão em **Domains** e anotar os valores de **DNS Records**. |
| **GoDaddy** | Criar/editar registro **A** para **@** = **216.198.79.1** e **CNAME** para **www** = valor do Vercel. Desativar encaminhamento de domínio. |
| **Vercel** | Clicar em **Refresh** em Domains e aguardar **Valid Configuration**. |
| **Navegador** | Testar https://fabiobdaniel.com → deve abrir https://awakenyourhero.com.br. |

---

## Se algo não funcionar

- **Continua "Invalid Configuration"**  
  Confira no GoDaddy se o **A** está exatamente **216.198.79.1** (ou o IP que o Vercel mostrou) e se o **CNAME** de **www** está igual ao do Vercel. Aguarde até 24 h de propagação e clique em **Refresh** de novo no Vercel.

- **fabiobdaniel.com abre outra página (não redireciona)**  
  Pode ser cache do navegador ou encaminhamento ativo no GoDaddy. Desative o encaminhamento, limpe o cache ou teste em aba anônima.

- **Valores diferentes no Vercel**  
  Use sempre os valores que aparecem na aba **DNS Records** do seu projeto no Vercel; eles podem mudar com o tempo.
