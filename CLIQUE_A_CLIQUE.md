# Guia clique a clique: fabiobdaniel.com → awakenyourhero.com.br

Siga na ordem. Cada passo é um clique ou ação concreta.

---

## PARTE A – No GoDaddy: liberar e corrigir o registro A (@)

Os registros A do domínio raiz (@) estão bloqueados (“No se puede editar”). Primeiro é preciso desativar o que trava esses registros (site/encaminhamento do GoDaddy).

### A1 – Entrar no GoDaddy

1. Abra o navegador.
2. Na barra de endereço, digite: **sso.godaddy.com**
3. Pressione **Enter**.
4. Faça login (e-mail e senha).
5. Clique em **Entrar** (ou **Sign In**).

### A2 – Abrir os produtos (domínios)

1. No menu ou na página inicial, clique em **Meus Produtos** (ou **My Products**).
2. Role a lista até encontrar o domínio **fabiobdaniel.com**.
3. Na linha do **fabiobdaniel.com**, clique no nome do domínio **ou** no botão **DNS** (ou **Manage** / **Gerenciar**).

### A3 – Ver se há “Website” ou “Forwarding” ativo

1. Na página do domínio **fabiobdaniel.com**, procure por:
   - **Website** / **Sitio web**
   - **Forwarding** / **Encaminhamiento de dominio**
   - **Parking** / **Estacionamiento**
2. Se aparecer **“Website”** ou **“Forwarding”** com um link ou botão tipo **Manage** / **Gerenciar** / **Configurar**:
   - Clique nesse link ou botão.
   - Procure a opção para **remover** o website ou **desativar** o encaminhamento para o domínio raiz (fabiobdaniel.com sem www).
   - Clique em **Remove** / **Eliminar** / **Desactivar** (ou equivalente) e confirme.
3. Se não achar essa tela, procure por **“DNS only”** ou **“Solo DNS”** ou **“I’ll use my own hosting”** e selecione essa opção para o domínio raiz, se existir.
4. Volte para a página principal do domínio (Meus Produtos → fabiobdaniel.com).

### A4 – Abrir a gestão de DNS

1. Na página do **fabiobdaniel.com**, clique em **DNS** (ou **Manage DNS** / **Gerenciar DNS**).
2. Aguarde carregar a tabela de registros (A, CNAME, NS, etc.).

### A5 – Editar ou adicionar o registro A para @

**Se os registros A de @ continuarem bloqueados (“No se puede editar”):**

1. Procure no GoDaddy por **“Forwarding”** ou **“Domain Forwarding”** (menu do domínio ou da conta).
2. Clique em **Forwarding** (ou **Encaminhamiento**).
3. Se existir um encaminhamento para **fabiobdaniel.com** (sem www), clique nele.
4. Clique em **Edit** / **Editar** (ou no ícone de lápis).
5. Clique em **Remove** / **Eliminar** / **Desactivar** e confirme.
6. Volte a **DNS** (Passo A4) e veja se os A de @ passaram a ter ícone de **Editar** (lápis).

**Quando os A de @ estiverem editáveis:**

1. Na tabela de DNS, localize o registro do tipo **A** com **Nombre** = **@**.
2. Clique no ícone de **lápis** (Editar) ao lado desse registro.
3. No campo **Datos** (ou **Value** / **Points to**), apague o valor atual.
4. Digite exatamente: **216.198.79.1**
5. Deixe **TTL** em **1 Hora** (ou padrão).
6. Clique em **Guardar** (ou **Save**).

**Se existirem dois registros A para @:**

1. Edite um deles para **216.198.79.1** (como acima).
2. Se o painel permitir, apague o outro A de @ (ícone de lixeira). Se não permitir, deixe; o importante é ter um A com **216.198.79.1**.

**Se não existir nenhum A para @ editável:**

1. Clique em **Agregar** (ou **Add** / **Add Record**).
2. Em **Tipo** / **Type**, selecione **A**.
3. Em **Nombre** / **Name**, digite: **@**
4. Em **Datos** / **Value**, digite: **216.198.79.1**
5. **TTL:** 1 Hora.
6. Clique em **Guardar** (ou **Save**).

---

## PARTE B – No Vercel: atualizar o domínio

### B1 – Abrir o Vercel

1. Abra uma nova aba no navegador.
2. Na barra de endereço, digite: **vercel.com**
3. Pressione **Enter**.
4. Faça login se precisar.

### B2 – Abrir o projeto e Domains

1. No painel (Dashboard), clique no projeto que tem **meucvegpoes** no nome (o que mostra **meucvegpoes-qi8a.vercel.app**).
2. No topo da página do projeto, clique na aba **Settings** (Configurações).
3. No menu lateral esquerdo, clique em **Domains** (Domínios).

### B3 – Atualizar o status de fabiobdaniel.com

1. Na lista de domínios, clique no nome **fabiobdaniel.com** (para abrir os detalhes).
2. Clique no botão **Refresh** (Atualizar).
3. Aguarde alguns segundos. O status pode continuar **Invalid Configuration** por 5–30 minutos (propagação do DNS).
4. Se depois de 1–2 horas ainda estiver **Invalid**, volte à Parte A e confira se o registro A está exatamente **216.198.79.1** e se não há outro produto (Website/Forwarding) travando o domínio raiz.

---

## PARTE C – Testar no navegador

1. Abra uma nova aba.
2. Na barra de endereço, digite: **https://fabiobdaniel.com**
3. Pressione **Enter**.
4. Você deve ser redirecionado para **https://awakenyourhero.com.br**.

Se não redirecionar, espere mais um pouco (propagação) ou teste em aba anónima.

---

## Resumo rápido (ordem dos cliques)

| Onde    | O que fazer |
|---------|-------------|
| **GoDaddy** | Login → Meus Produtos → fabiobdaniel.com → desativar Website/Forwarding do domínio raiz → DNS → editar ou adicionar A @ = **216.198.79.1** → Guardar. |
| **Vercel**  | Dashboard → projeto meucvegpoes → Settings → Domains → fabiobdaniel.com → **Refresh**. |
| **Navegador** | Abrir **https://fabiobdaniel.com** → deve abrir **https://awakenyourhero.com.br**. |

---

## Se no GoDaddy não conseguir editar os A

1. No painel do GoDaddy, procure **Ajuda** (?) ou **Suporte**.
2. Ou acesse **godaddy.com/help**.
3. Abra um chat ou ticket e diga: *“Preciso editar o registro A do domínio raiz (@) do fabiobdaniel.com para o valor 216.198.79.1. Os registros A estão bloqueados (No se puede editar). Podem desbloquear ou alterar para mim?”*
