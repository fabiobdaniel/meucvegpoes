# 🔧 Valores DNS para Configurar no GoDaddy

## ⚠️ IMPORTANTE: Configure DOIS Registros!

### **1. Registro A (para fabiobdaniel.com)**
```
Tipo:    A
Nome:    @
Valor:   216.198.79.1
TTL:     1 Hour
```

### **2. Registro CNAME (para www.fabiobdaniel.com)**
```
Tipo:    CNAME
Nome:    www
Valor:   db06e83b341453f5.vercel-dns-017.com.
TTL:     1 Hour
```

---

## 📝 Passos no GoDaddy:

1. Acesse: https://sso.godaddy.com
2. Vá em: **My Products** → **fabiobdaniel.com** → **DNS**
3. Na seção **Records**, adicione os DOIS registros acima
4. Salve ambos
5. Aguarde 15 minutos
6. No Vercel, clique em **Refresh** para verificar

---

## ✅ Após Configurar:

- No Vercel: Settings → Domains → Status deve mudar para "Valid Configuration"
- Tempo: Geralmente 15 minutos a 4 horas

---

⚠️ **Lembre-se:** O valor do CNAME é específico do seu projeto. Se aparecer diferente na tela do Vercel, use o valor que aparece lá!



