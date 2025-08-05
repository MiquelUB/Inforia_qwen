import './legal-layout.css';

export default function CookiePolicy() {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Política de Cookies de iNFORiA</h1>
        
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Una cookie es un pequeño archivo de texto que un sitio web guarda en su ordenador o dispositivo móvil cuando usted lo visita. Las cookies permiten que el sitio web recuerde sus acciones y preferencias (como su idioma, tamaño de letra y otras preferencias de visualización) durante un tiempo, para que no tenga que volver a introducirlas cada vez que vuelva a visitar el sitio o navegue de una página a otra.</p>
        
        <h2>2. ¿Cómo utilizamos las cookies?</h2>
        <p>Cuando usted visita nuestro sitio web, podemos colocar en su dispositivo una serie de cookies para distintos fines. Utilizamos cookies para:</p>
        <ul>
          <li>Recordar sus preferencias y configuraciones</li>
          <li>Mejorar su experiencia de navegación</li>
          <li>Analizar cómo utiliza nuestro sitio web</li>
          <li>Mostrarle contenido relevante</li>
          <li>Facilitar la autenticación y la seguridad</li>
        </ul>
        
        <h2>3. Tipos de cookies que utilizamos</h2>
        
        <h3>Cookies esenciales</h3>
        <p>Estas cookies son necesarias para que el sitio web funcione y no pueden desactivarse en nuestros sistemas. Suelen establecerse solo en respuesta a acciones llevadas a cabo por usted que equivalen a una solicitud de servicios, como ajustar sus preferencias de privacidad, iniciar sesión o rellenar formularios. Puede configurar su navegador para bloquearlas o avisarle sobre ellas, pero algunas partes del sitio web no funcionarán. Estas cookies no almacenan ninguna información de identificación personal.</p>
        
        <h3>Cookies de rendimiento</h3>
        <p>Estas cookies nos permiten contar visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio web. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo se mueven los visitantes por el sitio web. Toda la información que recopilan estas cookies es agregada y, por tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio.</p>
        
        <h3>Cookies de funcionalidad</h3>
        <p>Estas cookies permiten que nuestro sitio web ofrezca una mayor funcionalidad y personalización. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas. Si no permite estas cookies, algunas o todas estas funcionalidades pueden no funcionar correctamente.</p>
        
        <h3>Cookies de publicidad</h3>
        <p>Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. No almacenan directamente información personal, pero se basan en la identificación única de su navegador y dispositivo de Internet. Si no permite estas cookies, su experiencia publicitaria será menos personalizada.</p>
        
        <h2>4. Cookies específicas que utilizamos</h2>
        
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Proveedor</th>
              <th>Propósito</th>
              <th>Tipo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>next-auth.session-token</td>
              <td>iNFORiA</td>
              <td>Gestionar la sesión de autenticación</td>
              <td>Esencial</td>
              <td>Sesión</td>
            </tr>
            <tr>
              <td>next-auth.csrf-token</td>
              <td>iNFORiA</td>
              <td>Protección contra CSRF</td>
              <td>Esencial</td>
              <td>Sesión</td>
            </tr>
            <tr>
              <td>__Host-next-auth.callback-url</td>
              <td>iNFORiA</td>
              <td>Manejar callbacks de autenticación</td>
              <td>Esencial</td>
              <td>Sesión</td>
            </tr>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Identificar usuarios únicos</td>
              <td>Rendimiento</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Identificar usuarios únicos</td>
              <td>Rendimiento</td>
              <td>24 horas</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Google Analytics</td>
              <td>Limitar la tasa de solicitudes</td>
              <td>Rendimiento</td>
              <td>1 minuto</td>
            </tr>
          </tbody>
        </table>
        
        <h2>5. Consentimiento para cookies</h2>
        <p>Cuando visita nuestro sitio web por primera vez, se le mostrará un banner de cookies que le informará sobre el uso de cookies en nuestro sitio. Puede aceptar todas las cookies, rechazar todas las cookies no esenciales o personalizar su consentimiento.</p>
        
        <h2>6. Cómo gestionar las cookies</h2>
        <p>Puede gestionar, bloquear o eliminar las cookies utilizando las preferencias de su navegador. La mayoría de los navegadores le permiten:</p>
        <ul>
          <li>Ver qué cookies tiene en su ordenador</li>
          <li>Bloquear cookies individuales o todas las cookies</li>
          <li>Eliminar todas las cookies que ya están en su ordenador</li>
          <li>Detener las webs de colocar cookies en su dispositivo</li>
        </ul>
        
        <p>Puede encontrar información sobre cómo gestionar las cookies en los siguientes enlaces:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-ordenador" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
          <li><a href="https://support.apple.com/kb/ph21411?locale=es_ES" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        
        <p>Si decide bloquear las cookies, es posible que no pueda acceder a todas las funciones de nuestro sitio web.</p>
        
        <h2>7. Cambios en esta Política de Cookies</h2>
        <p>Podemos actualizar nuestra Política de cookies de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de cookies en esta página.</p>
        <p>Le informaremos por correo electrónico y/o mediante un aviso destacado en nuestro Servicio antes de que el cambio entre en vigor y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de cookies.</p>
        <p>Se recomienda que revise esta Política de cookies periódicamente para comprobar si se han introducido cambios. Los cambios en esta Política de cookies entran en vigor cuando se publican en esta página.</p>
        
        <h2>8. Contacto</h2>
        <p>Si tiene alguna pregunta sobre esta Política de cookies, por favor póngase en contacto con nosotros:</p>
        <ul>
          <li>Por correo electrónico: legal@inforia.es</li>
        </ul>
        
        <p><strong>Última actualización:</strong> 5 de abril de 2025</p>
      </div>
    </div>
  );
}
