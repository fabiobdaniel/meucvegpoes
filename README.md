# CV Multilíngue - Fabio Bittencourt Daniel

Sistema de currículo profissional com suporte a 3 idiomas (Português, Inglês e Espanhol) e base de dados MySQL.

## 🚀 Funcionalidades

- **3 Idiomas:** Português (Brasil), Inglês e Espanhol (México)
- **Base de Dados MySQL:** Armazenamento persistente de dados
- **Edição Online:** Interface de edição com credenciais de segurança
- **Tradução Automática:** Alterações em um idioma são traduzidas para os outros
- **Design Responsivo:** Funciona em desktop e mobile
- **Cores Personalizadas:** Baseado na identidade visual da FBD Global Business

## 📋 Pré-requisitos

- **Servidor Web:** Apache ou Nginx
- **PHP:** Versão 7.4 ou superior
- **MySQL:** Versão 5.7 ou superior
- **Navegador:** Chrome, Firefox, Safari ou Edge

## 🛠️ Instalação

### 1. Configurar Base de Dados

```sql
-- Execute o arquivo database.sql no MySQL
mysql -u root -p < database.sql
```

### 2. Configurar API

Edite o arquivo `api/config.php` com suas credenciais de base de dados:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'cv_multilingual');
define('DB_USER', 'seu_usuario');
define('DB_PASS', 'sua_senha');
```

### 3. Configurar Servidor Web

Coloque os arquivos na pasta do seu servidor web (ex: `/var/www/html/` ou `htdocs/`)

### 4. Acessar o Site

Abra o navegador e acesse: `http://localhost/meucvegpoes/`

## 🔐 Credenciais de Edição

- **Usuário:** `fabio`
- **Senha:** `1407`

## 🌍 Idiomas Suportados

- **Português (Brasil)** - `pt`
- **English** - `en`
- **Español (México)** - `es`

## 📁 Estrutura do Projeto

```
meucvegpoes/
├── api/
│   ├── config.php          # Configurações da base de dados
│   └── index.php           # API principal
├── database.sql            # Script de criação da base de dados
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript principal
└── README.md               # Este arquivo
```

## 🔧 Como Editar

1. **Acesse o site** no navegador
2. **Clique em "Editar"** no menu
3. **As credenciais já estão preenchidas** (fabio/1407)
4. **Modifique os dados** desejados
5. **Clique em "Salvar Alterações"**
6. **As traduções são feitas automaticamente** para os outros idiomas

## 🎨 Personalização

### Cores
As cores podem ser alteradas no arquivo `styles.css`:
- **Laranja Principal:** `#ff6b35`
- **Amarelo Secundário:** `#ffc107`
- **Roxo de Fundo:** Gradiente roxo

### Conteúdo
Todo o conteúdo é editável através da interface de edição ou diretamente na base de dados.

## 🐛 Solução de Problemas

### Erro de Conexão com Base de Dados
- Verifique as credenciais em `api/config.php`
- Confirme se o MySQL está rodando
- Execute o script `database.sql`

### Erro 500
- Verifique os logs do servidor web
- Confirme se o PHP está habilitado
- Verifique permissões de arquivo

### Dados não Carregam
- Verifique se a API está acessível
- Confirme se o JavaScript está habilitado
- Verifique o console do navegador para erros

## 📞 Suporte

Para suporte técnico ou dúvidas, entre em contato através do formulário no site.

## 📄 Licença

Este projeto é de uso pessoal e profissional de Fabio Bittencourt Daniel.

---

**Desenvolvido com ❤️ para FBD Global Business Strategy**