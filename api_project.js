define({
  "name": "Lockbox RESTful API",
  "version": "1.0.4",
  "description": "Anbindung an das Lockbox LTS.",
  "title": "Lockbox RESTful API V1",
  "url": "https://api.lockboxsystem.com/v1",
  "header": {
    "content": "<p>Die Lockbox API ermöglicht es Informationen zu Kunden und Sendungen direkt und einfach von <a href=\"http://www.lockboxsystem.com\">Lockbox</a> abzufragen.</p>\n<h2 id=\"authentifizierung\">Authentifizierung</h2>\n<p>Zu jeder Anfrage an unsere API muss der API-Key aus dem ServiceProvider-Konto als <code>GET</code>-Parameter mit gesendet werden. Bitte halte diesen API-Key stets geheim und vertraulich.</p>\n<p>Beispiel</p>\n<pre><code>https://api.lockboxsystem.com/v1/customer/anchor/a123?apikey=abcdef....\n</code></pre><h2 id=\"testen\">Testen</h2>\n<p>Zum Testen einer Funktion kannst du diese an eine alternative Basisadresse absenden. Nutze dafür die Adresse <code>http://api.lckbx.de/v1</code> zusammen mit dem normalen API-Key. Alle Anfragen an dieses System werden regulär verarbeitet aber erstellte Sendungen ggf. nach einer unbestimmten Zeit wieder verworfen.</p>\n<h2 id=\"versionierung\">Versionierung</h2>\n<p>Neuerungen an der API sind nicht ausgeschlossen. Dabei wird stets darauf geachtet, dass vorherige Versionen weiterhin ohne Beeinträchtigung funktionieren. Diese Dokumentation ist auf GitHub (<a href=\"https://github.com/lockboxsystem/apidoc\">https://github.com/lockboxsystem/apidoc</a>) verfügbar und kann für Benachrichtigungen über Veränderungen dort beobachtet werden.</p>\n"
  },
  "footer": {
    "content": "<h2 id=\"changelog\">Changelog</h2>\n<p><strong>V1.0.1</strong> Um Funktionen zum Hinzufügen und Entfernen von einzelnen Boxen an Sendungen erweitert.</p>\n<h2 id=\"weiterf-hrende-links\">Weiterführende Links</h2>\n<p>Die API folgt weitesgehend den Konventionen von <a href=\"http://jsonapi.org\">http://jsonapi.org</a> zur einheitlichen Gestaltung der Anfragen und Antworten.</p>\n"
  },
  "generator": {
    "version": "0.7.2",
    "time": "2017-01-09T10:20:59.649Z"
  }
});