# 🔧 Como Corrigir o Erro do CNAME no GoDaddy

## ❌ Erro: "Não foi possível adicionar o registro"

### **Problema 1: Falta o Ponto Final**

O valor do CNAME precisa terminar com um **ponto (.)**

❌ **Errado:** `db06e83b341453f5.vercel-dns-017.co`  
✅ **Correto:** `db06e83b341453f5.vercel-dns-017.com.`

### **Problema 2: Já Existe um Registro CNAME para www**

Se já existe um CNAME para `www`, você precisa **EDITAR** ao invés de criar novo.

---

## ✅ Solução Passo a Passo

### **Opção A: Se JÁ EXISTE um CNAME para www**

1. **Não clique em "Adicionar"** ou "Add Record"
2. **Procure na lista** de registros existentes
3. **Encontre o registro CNAME** com Nome = `www`
4. **Clique nos 3 pontinhos (⋮)** ao lado desse registro
5. **Clique em "Editar"** ou "Edit"
6. **No campo "Valor"**, altere para:
   ```
   db06e83b341453f5.vercel-dns-017.com.
   ```
   ⚠️ **IMPORTANTE:** Coloque o **ponto final (.)** no final!
7. **Clique em "Salvar"** ou "Save"

### **Opção B: Se NÃO EXISTE um CNAME para www**

1. **Clique em "Adicionar"** ou "+ Add Record"
2. **Selecione Tipo:** CNAME
3. **Nome:** `www`
4. **Valor:** `db06e83b341453f5.vercel-dns-017.com.`
   ⚠️ **IMPORTANTE:** Coloque o **ponto final (.)** no final do valor!
5. **TTL:** 1 hora (ou padrão)
6. **Clique em "Salvar"**

---

## 🔍 Verificar se Funcionou

Após salvar, você deve ver na lista:

```
Tipo     Nome    Valor                                    TTL
CNAME    www     db06e83b341453f5.vercel-dns-017.com.    1 hora
```

---

## ⚠️ Dicas Importantes

1. **Sempre coloque o ponto final (.)** no final do valor do CNAME
2. **Se já existe um registro**, edite ao invés de criar novo
3. **Aguarde alguns segundos** após salvar antes de verificar
4. **Se ainda der erro**, tente:
   - Limpar o cache do navegador
   - Fechar e abrir o painel do GoDaddy novamente
   - Verificar se não há caracteres invisíveis no campo

---

## 📋 Resumo Rápido

```
Tipo:    CNAME
Nome:    www
Valor:   db06e83b341453f5.vercel-dns-017.com.  ← COM PONTO FINAL!
TTL:     1 hora
```

---

**Depois de configurar, aguarde 15 minutos e clique em "Refresh" no Vercel para verificar!**



