// v 2024.abr-22.1
pres = document.querySelectorAll('pre.sql'); 
let u;
for(let pre of pres) {
//      console.log(pre)
      u = pre.innerHTML;
      u = u.replace(/\n/mg, "ª"); // uno las líneas, el fin de línea será: "ª"
      //u = u.replace(/([^\w])([0-9]+)/g, '$1<span style=color:#900>$2</span>'); // los números me cambian colores al estar en INSERT
      u = u.replace(/CREATE OR REPLACE VIEW /g, '<code>CREATE&nbsp;OR&nbsp;REPLACE&nbsp;VIEW</code> ');
      u = u.replace(/ (AUTO_INCREMENT|CONSTRAINT|DEFAULT|CHECK|ON DELETE CASCADE)([ ]*)/g, ' <code style="color:#059">$1</code>$2');
      u = u.replace(/ (NOT NULL|UNIQUE)([ ,;])/g, ' <code>$1</code>$2');
      u = u.replace(/ (AUTO_INCREMENT)([ ,])/g, ' <code style="color:#089">$1</code>$2');
      u = u.replace(/ (FOREIGN KEY)([ \(ª])/g, ' <span style="color:#059">$1</span>$2');
      u = u.replace(/ REFERENCES /g, ' <span style="color:#059">REFERENCES</span> ');
      /* integridad referencial */
      u = u.replace(/ ON (DELETE|UPDATE)/g, ' <span style="color:#089">ON&nbsp;$1</span>');
      u = u.replace(/ SET DEFAULT/g, ' <span style="color:#089">SET&nbsp;DEFAULT</span>');      
      u = u.replace(/UPDATE /g, ' <code>UPDATE&nbsp;</code>');
      u = u.replace(/ (CASCADE|RESTRICT)/g, ' <span style="color:#08A">$1</span>');
      u = u.replace(/ SET NULL/g, ' <span style="color:#089">SET&nbsp;NULL</span>');
      u = u.replace(/ SET /g, '<code>&nbsp;SET&nbsp;</code>');
      u = u.replace(/ NO ACTION/g, ' <span style="color:#089">NO&nbsp;ACTION</span>');
      u = u.replace(/ (IF EXISTS|IF NOT EXISTS) /g, ' <span style="color:#06A">$1</span> ');
      u = u.replace(/ (PRIMARY KEY)([ ,;\(])/g, ' <span style="color:#06A">$1</span>$2');
      u = u.replace(/ (KEY) /g, ' <span style="color:#059">$1</span> ');
      u = u.replace(/ (INTEGER|INT[^O]|TINYINT|VARCHAR|FLOAT|DATE|DECIMAL|TEXT)/g, ' <span style="color:black">$1</span>');
      u = u.replace(/ AS SELECT /g, '<code>&nbsp;AS&nbsp;SELECT</code> ');      
      u = u.replace(/(CREATE|DROP|ALTER) (VIEW|INDEX|TABLE|DATABASE)([ ;])/g, '<code>$1&nbsp;$2</code>$3');
      u = u.replace(/INSERT INTO /g, '<code>INSERT&nbsp;INTO</code> ');
      u = u.replace(/ VALUES([ ,ª])/g, ' <code>VALUES</code>$1');
      // u = u.replace(/DROP VIEW /g, '<code>DROP&nbsp;VIEW</code> ');
      u = u.replace(/(ADD|MODIFY|DROP|RENAME|CHANGE) COLUMN /g, '<code>$1&nbsp;COLUMN</code> ');
      u = u.replace(/ FIRST([;, ])/g, ' <code style="color:#D67">FIRST</code>$1');
      u = u.replace(/ AFTER /g, ' <code style="color:#D67">AFTER</code> ');
      
      u = u.replace(/ TO /g, '<code>&nbsp;TO&nbsp;</code>');      
      u = u.replace(/(USE|SHOW|ADD) /g, '<code>$1</code> ');
      // u = u.replace(/ALTER TABLE /g, '<code>ALTER&nbsp;TABLE</code> ');
      u = u.replace(/ (RENAME|ADD|MODIFY|CHANGE|DROP) /g, ' <code>$1</code> ');
      u = u.replace(/ (DATABASES|TABLES)([ ;])/g, ' <span style="color:#056">$1</span>$2');
      u = u.replace(/^(DESC|DESCRIBE) /g, '<code style="color:#00F">$1</code> ');
      u = u.replace(/(SELECT|FROM|INNER JOIN|JOIN|RIGHT JOIN|LEFT JOIN|WHERE|HAVING|ORDER BY|GROUP BY|LIMIT)/g, '<code>$1</code>');
      u = u.replace(/(DELETE|TRUNCATE|CONSTRAINT) /g, '<code>$1</code> ');
      u = u.replace(/DISTINCT/g, '<span style="color:#09F">DISTINCT</span>');
      u = u.replace(/( ON )/g, ' <code style="color:#08A">ON</code> ') /*TODO: Afecta a ON DELETE | ON UPDATE*/ 
      u = u.replace(/( UNION ALL)/g, ' <code><b>UNION&nbsp;ALL</b></code>')
      u = u.replace(/( UNION)/g, ' <code><b>UNION</b></code>')
      u = u.replace(/( INTERSECT)/g, ' <code><b>INTERSECT</b></code>')      
      u = u.replace(/ (DESC|ASC)/g, ' <code style="color:#08A">$1</code>');
      u = u.replace(/ LIKE ("[^"]*")/g, ' <span style="color:#08A">LIKE </span><tt style=color:#800>$1</tt>');
      u = u.replace(/(COUNT|SUM|AVG|MAX|MIN)/g, '<kbd>$1</kbd>');
      u = u.replace(/ (VIRTUAL|PERSISTENT)/g, ' <kbd style="color:blue">$1</kbd>');
      u = u.replace(/( AND )/g, '<tt> AND </tt>');
      u = u.replace(/( OR )/g, '<b style=color:#080>  OR  </b>');
     // u = u.replace(/<code>CREATE<\/code><b style="color:#080">  OR  <\/b>REPLACE/g, '<b style=color:red>  OR  </b>');
     u = u.replace(/ BETWEEN ([^ ]*) AND /g, ' <span style="color:#489">BETWEEN</span> $1 <span style="color:#489">AND</span> ');
      
// TODO: Demasiados AS
      u = u.replace(/ AS ([^"\(][A-Za-z]+)/g, ' AS <span style="color:#777">$1</span>');
      u = u.replace(/ AS(  )/g, ' <code>AS</code>$1');
      u = u.replace(/ "([^<]*)<span[^>]*>(.*)(.*)"/g, ' "$1$2$3"');
      /* Textos entre comillas dobles*/
      u = u.replace(/([ ,\(])"([^"]*)"/g, '$1<span style=color:#844>"$2"</span>');

      u = u.replace(/ AS /g, ' <span style="color:#99A">AS</span> ');
      // crreo que lo uso en los alias
      u = u.replace(/ As ([^,]*),/g, ' <span style=color:#666>AS<b> $1</b></span>,');
      u = u.replace(/ As (.*)ª/, ' <span style=color:#666>AS<b> $1</b></span>\n');

      u = u.replace(/ IS NOT NULL/, ' <span style=color:black>IS&nbsp;NOT&nbsp;NULL</span>');
      u = u.replace(/ IS NULL/, ' <span style=color:black>IS&nbsp;NULL</span>');
      /* Funciones */
      u = u.replace(/ mod /g, ' <span style="color:#A40">mod</span> ');
      u = u.replace(/([\( ])(left|datediff|now|date|curdate|sysdate|time|curtime|timestamp|timestampdiff|round|pow|abs|pi)\(/g, '$1<span style="color:#A40">$2</span>(');
	  /* comentarios multilínea */
      u = u.replace(/(\/\* .* \*\/)/g, '<span style="color:#C84">$1</span>');
      /* vuelvo a poner saltos de línea */
      u = u.replaceAll("ª", "\n");
      /* comentarios de una línea */
      u = u.replace(/(-- .*)/g, '<span style="color:#C84">$1</span>');

      u = u.replace(/\[bash\]\$(.*)$/gm, '[bash]$ <span style=color:#800>$1</span>');

      pre.innerHTML = u;

}
