# 🚀 Configuração Rápida do Domínio

## ⚡ O que POSSO fazer automaticamente:
- ✅ Criar scripts e guias
- ✅ Preparar configurações
- ✅ Abrir links no navegador

## ⚠️ O que PRECISA ser feito manualmente:
- 🔐 Login no Vercel (requer suas credenciais)
- 🔐 Login no provedor de DNS (Registro.br, GoDaddy, etc.)
- 📝 Adicionar domínio no painel do Vercel
- 📝 Configurar registros DNS

---

## 🎯 Configuração em 5 Minutos

### **PASSO 1: Vercel Dashboard** (2 min)

1. **Acesse:** https://vercel.com/dashboard
2. **Selecione o projeto:** `meucvegpoes`
3. **Vá em:** Settings → Domains
4. **Clique em:** Add Domain
5. **Digite:** `www.fabiobdaniel.com`
6. **Clique em:** Add

O Vercel mostrará instruções de DNS específicas.

### **PASSO 2: Configurar DNS** (3 min)

#### **Se seu domínio está no Registro.br:**
1. Acesse: https://registro.br
2. Vá em: **Meus Domínios** → `fabiobdaniel.com.br`
3. Clique em: **DNS** → **Gerenciar DNS**
4. Adicione:
   - **Tipo:** CNAME
   - **Nome:** www
   - **Alvo:** `cname.vercel-dns.com`
   - **TTL:** 3600

#### **Se está no GoDaddy:**
1. Acesse: https://godaddy.com
2. Vá em: **My Products** → **DNS**
3. Adicione:
   - **Tipo:** CNAME
   - **Nome:** www
   - **Valor:** `cname.vercel-dns.com`
   - **TTL:** 1 Hour

#### **Se está no Namecheap:**
1. Acesse: https://namecheap.com
2. Vá em: **Domain List** → **Manage**
3. Aba: **Advanced DNS**
4. Adicione:
   - **Tipo:** CNAME Record
   - **Host:** www
   - **Value:** `cname.vercel-dns.com`

### **PASSO 3: Verificar** (aguardar)

- ⏱️ **Propagação DNS:** 15 minutos a 48 horas
- ✅ **Status no Vercel:** Vá em Settings → Domains
- 🔒 **SSL:** Automático (não precisa configurar nada)

---

## 🔍 Verificar Status

### No Vercel:
- ✅ **Valid Configuration** = Tudo OK!
- ⏳ **Pending** = Aguardando DNS
- ❌ **Invalid** = Verifique os registros

### Testar DNS:
```bash
# No terminal
dig www.fabiobdaniel.com
nslookup www.fabiobdaniel.com
```

### Testar Site:
- Abra: https://www.fabiobdaniel.com
- Deve redirecionar para o site do Vercel

---

## 📞 Precisa de Ajuda?

1. **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
2. **Vercel Support:** https://vercel.com/support
3. **Verificar DNS:** https://dnschecker.org

---

## ✅ Checklist Final

- [ ] Domínio adicionado no Vercel
- [ ] CNAME configurado no DNS
- [ ] Status mostra "Valid Configuration"
- [ ] Site acessível em www.fabiobdaniel.com
- [ ] HTTPS funcionando (automático)

---

**Tempo total:** ~5 minutos (configuração) + até 48h (propagação)



