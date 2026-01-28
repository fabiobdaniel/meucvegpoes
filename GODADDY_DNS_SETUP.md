# 🔧 Configurar DNS no GoDaddy

## Passo a Passo para www.fabiobdaniel.com

### **1. Acessar o Painel do GoDaddy**

1. Acesse: https://sso.godaddy.com
2. Faça login na sua conta
3. Vá em **My Products** (Meus Produtos)

### **2. Localizar o Domínio**

1. Na lista de produtos, encontre **fabiobdaniel.com**
2. Clique no domínio ou em **DNS** ao lado

### **3. Gerenciar Registros DNS**

1. Você verá a seção **Records** (Registros DNS)
2. Role até encontrar os registros existentes

### **4. Adicionar Registro A para fabiobdaniel.com (domínio raiz)**

⚠️ **IMPORTANTE:** Você precisa configurar DOIS registros DNS!

**1. Registro A para o domínio raiz:**
1. Na seção **Records**, clique em **Add** (Adicionar) ou **+ Add Record**
2. Preencha:
   - **Type** (Tipo): Selecione **A**
   - **Name** (Nome): Digite `@` (arroba, representa o domínio raiz)
   - **Value** (Valor): Digite `216.198.79.1`
   - **TTL** (Tempo de vida): Deixe como `1 Hour` (1 hora) ou padrão
3. Clique em **Save** (Salvar)

**Se já existe um registro A para @:**
- Edite o existente e altere o valor para `216.198.79.1`

### **5. Adicionar Registro CNAME para www**

**Opção A: Se já existe um CNAME para www**
1. Clique nos **3 pontinhos** (⋮) ao lado do registro CNAME existente do `www`
2. Clique em **Edit** (Editar)
3. No campo **Points to** (Aponta para), altere para:
   ```
   db06e83b341453f5.vercel-dns-017.com.
   ```
   ⚠️ **IMPORTANTE:** Use o valor EXATO que o Vercel mostra na sua tela!
4. Clique em **Save** (Salvar)

**Opção B: Se NÃO existe um CNAME para www**
1. Na seção **Records**, clique em **Add** (Adicionar) ou **+ Add Record**
2. Preencha:
   - **Type** (Tipo): Selecione **CNAME**
   - **Name** (Nome): Digite `www`
   - **Value** (Valor): Digite `db06e83b341453f5.vercel-dns-017.com.`
     ⚠️ **IMPORTANTE:** Copie o valor EXATO que aparece na tela do Vercel!
   - **TTL** (Tempo de vida): Deixe como `1 Hour` (1 hora) ou padrão
3. Clique em **Save** (Salvar)

### **6. Verificar Configuração**

Após salvar, você deve ver algo assim na lista:

```
Type    Name    Value                                    TTL
A       @       216.198.79.1                             1 Hour
CNAME   www     db06e83b341453f5.vercel-dns-017.com.     1 Hour
```

### **7. Aguardar Propagação**

- ⏱️ **Tempo:** 15 minutos a 4 horas (geralmente)
- 🔍 **Verificar:** No Vercel, vá em Settings → Domains
- ✅ **Status:** Mudará de "Pending" para "Valid Configuration"

---

## 📋 Resumo da Configuração

⚠️ **Você precisa configurar DOIS registros:**

### Registro 1: Domínio Raiz
```
Tipo:    A
Nome:    @
Valor:   216.198.79.1
TTL:     1 Hour (ou padrão)
```

### Registro 2: Subdomínio www
```
Tipo:    CNAME
Nome:    www
Valor:   db06e83b341453f5.vercel-dns-017.com.
TTL:     1 Hour (ou padrão)
```

⚠️ **IMPORTANTE:** O valor do CNAME é específico do seu projeto. Copie o valor EXATO que aparece na tela do Vercel!

---

## ⚠️ Observações Importantes

1. **Não remova outros registros** (MX, TXT, etc.) a menos que saiba o que está fazendo
2. **Você precisa configurar DOIS registros:**
   - Registro **A** para `@` (domínio raiz)
   - Registro **CNAME** para `www`
3. **O valor do CNAME é específico** - copie EXATAMENTE o que aparece na tela do Vercel
4. **Se já existe um registro A para @**, edite-o ao invés de criar novo
5. **SSL/HTTPS** será configurado automaticamente pelo Vercel
6. **Propagação DNS** pode levar até 48 horas, mas geralmente acontece em minutos

---

## 🔍 Verificar se Funcionou

### No Vercel:
1. Vá em **Settings** → **Domains**
2. Procure por `www.fabiobdaniel.com`
3. Status deve mostrar:
   - ✅ **Valid Configuration** = Funcionando!
   - ⏳ **Pending** = Aguardando DNS
   - ❌ **Invalid** = Verifique novamente

### No Terminal (Mac):
```bash
dig www.fabiobdaniel.com
# Deve mostrar: cname.vercel-dns.com
```

### No Navegador:
- Após propagação, acesse: https://www.fabiobdaniel.com
- Deve carregar seu site do Vercel

---

## ❓ Problemas Comuns

### "CNAME already exists"
- Edite o registro existente ao invés de criar novo
- Altere o valor para `cname.vercel-dns.com`

### "Invalid Configuration" no Vercel
- Verifique se digitou corretamente: `cname.vercel-dns.com`
- Certifique-se que o tipo é **CNAME** (não A ou outros)
- Aguarde alguns minutos após salvar

### Site não carrega após 4 horas
- Verifique no Vercel se o domínio está "Valid"
- Teste: `dig www.fabiobdaniel.com` no terminal
- Entre em contato com suporte do Vercel se necessário

---

**✅ Depois de configurar, seu site estará acessível em:**
- 🌐 https://www.fabiobdaniel.com
- 🌐 https://fabiobdaniel.com (redireciona para www)

