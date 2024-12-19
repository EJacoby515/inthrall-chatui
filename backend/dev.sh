export PYTHONWARNINGS="ignore:Unverified HTTPS request"
export REQUESTS_CA_BUNDLE="/etc/ssl/cert.pem"
export PYTHONHTTPSVERIFY=0


PORT="${PORT:-8080}"
uvicorn open_webui.main:app --port $PORT --host 0.0.0.0 --forwarded-allow-ips '*' --reload