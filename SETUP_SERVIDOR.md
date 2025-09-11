# 🚀 Configuração do Servidor Local

## ⚠️ Problema Atual
O site está funcionando em **modo offline** (sem base de dados). Para usar todas as funcionalidades, você precisa configurar um servidor local.

## 🛠️ Soluções Disponíveis

### **Opção 1: XAMPP (Recomendado para Mac)**

1. **Baixar XAMPP:**
   - Acesse: https://www.apachefriends.org/download.html
   - Baixe a versão para macOS

2. **Instalar e Configurar:**
   ```bash
   # Instalar XAMPP
   # Mover pasta do projeto para htdocs
   cp -r /Users/fabiodaniel/Documents/GitHub/meucvegpoes /Applications/XAMPP/htdocs/
   ```

3. **Iniciar Serviços:**
   - Abra o XAMPP Control Panel
   - Inicie **Apache** e **MySQL**

4. **Configurar Base de Dados:**
   ```sql
   -- Acesse: http://localhost/phpmyadmin
   -- Execute o arquivo database.sql
   ```

5. **Acessar o Site:**
   - URL: `http://localhost/meucvegpoes/`

### **Opção 2: Servidor PHP Built-in**

```bash
# Navegar para a pasta do projeto
cd /Users/fabiodaniel/Documents/GitHub/meucvegpoes

# Iniciar servidor PHP
php -S localhost:8000

# Acessar: http://localhost:8000
```

### **Opção 3: MAMP (Alternativa)**

1. **Baixar MAMP:**
   - Acesse: https://www.mamp.info/en/downloads/

2. **Configurar:**
   - Mover projeto para `/Applications/MAMP/htdocs/`
   - Iniciar Apache e MySQL
   - Acessar: `http://localhost:8888/meucvegpoes/`

## 🔧 Configuração da Base de Dados

### **1. Criar Base de Dados:**
```sql
-- Acesse phpMyAdmin ou terminal MySQL
CREATE DATABASE cv_multilingual;
```

### **2. Executar Script SQL:**
```bash
# Via terminal
mysql -u root -p cv_multilingual < database.sql

# Ou via phpMyAdmin
# Importar o arquivo database.sql
```

### **3. Verificar Configuração:**
Edite `api/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'cv_multilingual');
define('DB_USER', 'root');
define('DB_PASS', ''); // Sua senha do MySQL
```

## ✅ Verificação de Funcionamento

### **Modo Offline (Atual):**
- ✅ Site carrega dados estáticos
- ✅ Edição funciona (salva no localStorage)
- ✅ Troca de idiomas funciona
- ❌ Não salva na base de dados
- ❌ Não traduz automaticamente

### **Modo Online (Com Servidor):**
- ✅ Site carrega dados da base de dados
- ✅ Edição funciona e salva na base de dados
- ✅ Tradução automática funciona
- ✅ Dados persistem entre sessões
- ✅ Sistema completo funcionando

## 🐛 Solução de Problemas

### **Erro: "Access to fetch at 'api/index.php' has been blocked by CORS policy"**
- **Causa:** Arquivo HTML aberto diretamente no navegador
- **Solução:** Use um servidor web (XAMPP, MAMP, ou PHP built-in)

### **Erro: "Database connection failed"**
- **Causa:** MySQL não está rodando ou credenciais incorretas
- **Solução:** Verificar se MySQL está ativo e credenciais em `api/config.php`

### **Erro: "Table 'cv_multilingual.cv_data' doesn't exist"**
- **Causa:** Base de dados não foi criada
- **Solução:** Executar o script `database.sql`

## 📱 Teste Rápido

1. **Abra o Console do Navegador** (F12)
2. **Verifique as mensagens:**
   - `"Loading data from localStorage..."` = Modo offline
   - `"Loading fallback data..."` = API não disponível
   - `"Loading CV data from API..."` = Modo online funcionando

## 🎯 Próximos Passos

1. **Configure um servidor local** usando uma das opções acima
2. **Execute o script SQL** para criar a base de dados
3. **Teste o site** no servidor local
4. **Verifique se a edição** salva na base de dados

---

**💡 Dica:** O site funciona perfeitamente em modo offline para demonstração, mas para uso completo com base de dados, configure um servidor local.
