function getBackendBase(){
  // If user saved a URL during this session, prefer it
  const manual = document.getElementById('backendUrl')?.value?.trim();
  if (manual) return manual;

  // If config.js provides one, use it
  if (typeof BACKEND_URL === 'string' && BACKEND_URL.trim().length > 0) return BACKEND_URL.trim();

  // Default: same origin (works in Colab/ngrok dev)
  return "";
}

async function analyze(){
  const symptoms = document.getElementById("symptoms").value.trim();
  const base = getBackendBase();
  const endpoint = base ? base.replace(/\/$/,'') + "/analyze" : "/analyze";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms })
  });
  const data = await res.json();
  const el = document.getElementById("result");
  el.style.display = "block";
  el.textContent = "AI Suggestion: " + (data.analysis || "No analysis");
}

function saveBackendUrl(){
  // Just keeps input typed; actual storage not required—simple field for convenience.
  const v = document.getElementById('backendUrl').value.trim();
  if(v) alert("Backend URL set for this session:
" + v + "
(Remember to also update static/config.js for permanent use.)");
}
