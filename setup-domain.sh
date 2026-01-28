#!/bin/bash

# Script para Configurar Domínio Personalizado no Vercel
# www.fabiobdaniel.com → meucvegpoes.vercel.app

echo "🌐 Configuração de Domínio Personalizado"
echo "=========================================="
echo ""

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel || {
        echo "⚠️  Erro ao instalar Vercel CLI globalmente"
        echo "💡 Tentando com npx..."
        USE_NPX=true
    }
fi

echo ""
echo "🔐 Você precisará fazer login no Vercel"
echo ""

# Login no Vercel (se não estiver logado)
if [ "$USE_NPX" = true ]; then
    echo "📝 Executando: npx vercel login"
    npx vercel login
else
    echo "📝 Executando: vercel login"
    vercel login
fi

echo ""
echo "✅ Login concluído!"
echo ""
echo "📋 Próximos passos:"
echo "1. Adicionar domínio no Vercel Dashboard"
echo "2. Configurar DNS no provedor do domínio"
echo ""
echo "🚀 Abrindo Vercel Dashboard..."
open "https://vercel.com/dashboard" 2>/dev/null || echo "👉 Acesse: https://vercel.com/dashboard"

echo ""
echo "📝 Instruções para adicionar domínio:"
echo "   1. Vá em Settings → Domains"
echo "   2. Clique em 'Add Domain'"
echo "   3. Digite: www.fabiobdaniel.com"
echo "   4. Clique em 'Add'"
echo ""
echo "🔧 Depois, configure o DNS no seu provedor:"
echo "   Tipo: CNAME"
echo "   Nome: www"
echo "   Valor: cname.vercel-dns.com"
echo ""
echo "✅ Pronto! Aguarde a propagação DNS (até 48h)"



