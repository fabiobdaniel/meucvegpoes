# ✅ Verificar se o DNS Está Configurado Corretamente

## 🔍 Passo 1: Verificar no Vercel

1. **Acesse:** https://vercel.com/dashboard
2. **Selecione o projeto:** `meucvegpoes`
3. **Vá em:** Settings → Domains
4. **Clique no botão "Refresh"** ao lado de cada domínio

### Status Esperado:

- ✅ **"Valid Configuration"** = Funcionando! ✅
- ⏳ **"Pending"** = Aguardando propagação DNS (normal, pode levar até 4 horas)
- ❌ **"Invalid Configuration"** = Verifique os registros DNS novamente

---

## 🔍 Passo 2: Verificar DNS com Terminal (Mac)

Abra o Terminal e execute:

```bash
# Verificar registro A (domínio raiz)
dig fabiobdaniel.com A

# Verificar registro CNAME (www)
dig www.fabiobdaniel.com CNAME
```

### Resultado Esperado:

**Para fabiobdaniel.com:**
```
;; ANSWER SECTION:
fabiobdaniel.com.    3600    IN    A    216.198.79.1
```

**Para www.fabiobdaniel.com:**
```
;; ANSWER SECTION:
www.fabiobdaniel.com.    3600    IN    CNAME    db06e83b341453f5.vercel-dns-017.com.
```

---

## 🔍 Passo 3: Verificar Online

### Opção 1: DNS Checker
1. Acesse: https://dnschecker.org
2. Digite: `www.fabiobdaniel.com`
3. Selecione: **CNAME**
4. Clique em **Search**
5. Deve mostrar: `db06e83b341453f5.vercel-dns-017.com.`

### Opção 2: What's My DNS
1. Acesse: https://www.whatsmydns.net
2. Digite: `www.fabiobdaniel.com`
3. Selecione: **CNAME**
4. Verifique se mostra o valor correto

---

## ⏱️ Tempo de Propagação

- **Mínimo:** 15 minutos
- **Médio:** 1-2 horas
- **Máximo:** 48 horas (raro)

**Geralmente funciona em 15-30 minutos!**

---

## 🎯 Próximos Passos

### Se o Status é "Valid Configuration":
✅ **Parabéns!** O domínio está configurado corretamente.

1. **Acesse:** https://www.fabiobdaniel.com
2. **Deve carregar:** Seu site do Vercel
3. **HTTPS:** Será configurado automaticamente pelo Vercel

### Se o Status ainda é "Pending":
⏳ **Aguarde mais alguns minutos** e clique em "Refresh" novamente.

### Se o Status é "Invalid Configuration":
❌ **Verifique:**
1. Os valores DNS estão corretos no GoDaddy?
2. O ponto final (.) está no final do CNAME?
3. Ambos os registros (A e CNAME) foram salvos?

---

## 📋 Checklist Final

- [ ] Registro A configurado: `@` → `216.198.79.1`
- [ ] Registro CNAME configurado: `www` → `db06e83b341453f5.vercel-dns-017.com.`
- [ ] Ambos foram salvos no GoDaddy
- [ ] Aguardou 15 minutos
- [ ] Clicou em "Refresh" no Vercel
- [ ] Status mudou para "Valid Configuration"

---

## 🆘 Se Ainda Não Funcionar

1. **Verifique novamente no GoDaddy:**
   - Os registros estão salvos?
   - Os valores estão corretos?
   - Não há caracteres extras?

2. **Aguarde mais tempo:**
   - DNS pode levar até 4 horas
   - Continue verificando no Vercel

3. **Contate o Suporte:**
   - Vercel Support: https://vercel.com/support
   - GoDaddy Support: https://www.godaddy.com/help

---

**Depois de configurar, seu site estará acessível em:**
- 🌐 https://www.fabiobdaniel.com
- 🌐 https://fabiobdaniel.com (redireciona para www)



