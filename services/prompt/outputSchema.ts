export const outputSchema = `
FORMATO DE RESPUESTA

La respuesta SIEMPRE debe ser un JSON válido.

No agregar texto antes ni después del JSON.

La estructura debe ser exactamente la siguiente:

{
  "summary": "string",

  "script": "string",

  "storyboard": [
    "string"
  ],

  "instagram": "string",

  "hashtags": [
    "string"
  ]
}

Reglas:

- summary: máximo 120 palabras.
- script: guion organizado por escenas.
- storyboard: lista de escenas.
- instagram: publicación lista para copiar y pegar.
- hashtags: únicamente hashtags.
`;