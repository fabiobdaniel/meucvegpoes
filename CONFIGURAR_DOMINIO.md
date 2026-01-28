# 🌐 Configurar Domínio Personalizado no Vercel

## Passo a Passo para Configurar `www.fabiobdaniel.com`

### 1️⃣ **No Painel do Vercel**

1. Acesse: https://vercel.com/dashboard
2. Selecione o projeto **meucvegpoes**
3. Vá em **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite: `www.fabiobdaniel.com`
6. Clique em **Add**

### 2️⃣ **Configurar DNS no Provedor do Domínio**

O Vercel fornecerá instruções específicas, mas geralmente você precisa:

#### **Para `www.fabiobdaniel.com` (CNAME):**
```
Tipo: CNAME
Nome/Host: www
Valor/Destino: cname.vercel-dns.com
TTL: 3600 (ou padrão)
```

#### **Para `fabiobdaniel.com` (sem www) - Opcional:**
Se quiser também o domínio sem www:
```
Tipo: A
Nome/Host: @
Valor/Destino: 76.76.21.21 (IP do Vercel - verifique no painel)
TTL: 3600
```

**OU** configure redirecionamento no Vercel:
- No painel do Vercel, adicione também `fabiobdaniel.com`
- Configure redirecionamento de `fabiobdaniel.com` → `www.fabiobdaniel.com`

### 3️⃣ **Verificar Configuração**

Após configurar o DNS, o Vercel verificará automaticamente. Você verá:
- ✅ **Valid Configuration** - Tudo configurado corretamente
- ⚠️ **Pending** - Aguardando propagação DNS (pode levar 24-48h)
- ❌ **Invalid Configuration** - Verifique os registros DNS

### 4️⃣ **Provedores de Domínio Comuns**

#### **Registro.br (Brasil)**
1. Acesse: https://registro.br
2. Vá em **Meus Domínios** → Selecione `fabiobdaniel.com.br`
3. Clique em **DNS** → **Gerenciar DNS**
4. Adicione registro CNAME:
   - Nome: `www`
   - Tipo: `CNAME`
   - Alvo: `cname.vercel-dns.com`

#### **GoDaddy**
1. Acesse: https://godaddy.com
2. Vá em **My Products** → **DNS**
3. Na seção **Records**, adicione:
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `cname.vercel-dns.com`
   - TTL: `1 Hour`

#### **Namecheap**
1. Acesse: https://namecheap.com
2. Vá em **Domain List** → **Manage**
3. Aba **Advanced DNS**
4. Adicione novo registro:
   - Tipo: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `Automatic`

### 5️⃣ **SSL/HTTPS**

O Vercel fornece **certificado SSL gratuito** automaticamente após a configuração do domínio. Não é necessário configurar nada adicional.

### 6️⃣ **Verificar Status**

Após configurar, você pode verificar:
- **No Vercel**: Settings → Domains → Status
- **DNS Check**: https://dnschecker.org
- **SSL Check**: https://www.ssllabs.com/ssltest/

### ⚠️ **Problemas Comuns**

1. **DNS não propagou**: Aguarde até 48 horas
2. **Configuração inválida**: Verifique se o CNAME está correto
3. **Domínio não encontrado**: Verifique se o domínio está realmente registrado

### 📞 **Suporte**

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **Vercel Support**: https://vercel.com/support

---

## ✅ Checklist

- [ ] Domínio adicionado no Vercel
- [ ] CNAME configurado no provedor DNS
- [ ] Status mostra "Valid Configuration" no Vercel
- [ ] Site acessível em `https://www.fabiobdaniel.com`
- [ ] SSL/HTTPS funcionando (automático)

---

**Tempo estimado**: 15 minutos (configuração) + até 48 horas (propagação DNS)



