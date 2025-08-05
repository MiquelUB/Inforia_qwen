import './legal-layout.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Política de Privacidad de iNFORiA</h1>
        
        <h2>1. Información General</h2>
        <p>iNFORiA ("nosotros", "nuestro", "la aplicación") opera el servicio iNFORiA (en adelante, el "Servicio").</p>
        <p>Esta página le informa de nuestras políticas en materia de recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y de las opciones de las que dispone en relación con esos datos.</p>
        
        <h2>2. Modelo Zero-Knowledge</h2>
        <p>Nuestro modelo de privacidad se basa en el principio Zero-Knowledge. Esto significa que:</p>
        <ul>
          <li>Los datos sensibles de sus pacientes (historiales clínicos, sesiones, etc.) permanecen exclusivamente en su entorno de Google Workspace.</li>
          <li>iNFORiA no almacena, procesa ni tiene acceso a ningún dato clínico del paciente.</li>
          <li>La aplicación solo interactúa con sus datos de Google Sheets como adaptador, sin almacenarlos en nuestros servidores.</li>
        </ul>
        
        <h2>3. Información que Recopilamos</h2>
        <h3>Datos de cuenta</h3>
        <p>Recopilamos cierta información cuando se registra para utilizar el Servicio, que puede incluir:</p>
        <ul>
          <li>Dirección de correo electrónico (para autenticación y comunicación)</li>
          <li>Nombre y apellidos</li>
          <li>Información de perfil de Google (obtenida mediante autenticación OAuth2)</li>
        </ul>
        
        <h3>Datos de uso</h3>
        <p>También recopilamos información sobre cómo se accede y utiliza el Servicio ("Datos de Uso"). Estos Datos de Uso pueden incluir información como:</p>
        <ul>
          <li>Dirección del protocolo de Internet (por ejemplo, dirección IP)</li>
          <li>Tipo de navegador y versión</li>
          <li>Páginas de nuestro Servicio que visita</li>
          <li>Fecha y hora de visita</li>
          <li>Tiempo dedicado a esas páginas</li>
          <li>Identificadores únicos de dispositivo y otros datos de diagnóstico</li>
        </ul>
        
        <h3>Datos de cookies y seguimiento</h3>
        <p>Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y mantener cierta información. Para más información, consulte nuestra Política de Cookies.</p>
        
        <h2>4. Uso de los Datos</h2>
        <p>Utilizamos los datos recopilados para diversos fines:</p>
        <ul>
          <li>Para proporcionar y mantener nuestro Servicio</li>
          <li>Para notificarle sobre cambios en nuestro Servicio</li>
          <li>Para permitirle participar en funciones interactivas de nuestro Servicio cuando elija hacerlo</li>
          <li>Para prestar asistencia al cliente</li>
          <li>Para recopilar análisis o información valiosa para que podamos mejorar nuestro Servicio</li>
          <li>Para controlar el uso de nuestro Servicio</li>
          <li>Para detectar, prevenir y abordar problemas técnicos</li>
        </ul>
        
        <h2>5. Transferencia de Datos</h2>
        <p>Su información, incluidos los Datos personales, puede ser transferida a y mantenida en ordenadores ubicados fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.</p>
        <p>Si se encuentra fuera de España y decide facilitarnos información, tenga en cuenta que transferimos los datos, incluidos los Datos personales, a España y los tratamos allí.</p>
        <p>Su aceptación de esta Política de privacidad seguida de su envío de dicha información representa su acuerdo con dicha transferencia.</p>
        
        <h2>6. Divulgación de Datos</h2>
        <h3>Requisitos legales</h3>
        <p>iNFORiA puede divulgar sus Datos personales de buena fe cuando considere que tal acción es necesaria para:</p>
        <ul>
          <li>Cumplir una obligación legal</li>
          <li>Proteger y defender los derechos o propiedad de iNFORiA</li>
          <li>Prevenir o investigar posibles irregularidades en relación con el Servicio</li>
          <li>Proteger la seguridad personal de usuarios del Servicio o del público</li>
          <li>Protegerse frente a consecuencias legales</li>
        </ul>
        
        <h2>7. Seguridad de los Datos</h2>
        <p>La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos personales, no podemos garantizar su seguridad absoluta.</p>
        
        <h2>8. Proveedores de Servicios</h2>
        <p>Podemos contratar a empresas e individuos de terceros para facilitar nuestro Servicio ("Proveedores de Servicio"), para prestar el Servicio en nuestro nombre, para realizar servicios relacionados con el Servicio o para ayudarnos a analizar cómo se utiliza nuestro Servicio.</p>
        <p>Estos terceros tienen acceso a sus Datos personales solo para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos para ningún otro fin.</p>
        
        <h2>9. Enlaces a Otros Sitios</h2>
        <p>Nuestro Servicio puede contener enlaces a otros sitios no operados por nosotros. Si hace clic en el enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de todos los sitios que visite.</p>
        <p>No tenemos ningún control ni asumimos ninguna responsabilidad en cuanto al contenido, las políticas o prácticas de privacidad de sitios o servicios de terceros.</p>
        
        <h2>10. Privacidad de Menores</h2>
        <p>Nuestro Servicio no se dirige a ningún menor de 18 años (en adelante, "Menor").</p>
        <p>No recopilamos de forma consciente información personalmente identificable de menores. Si usted es un padre/madre o tutor legal y tiene conocimiento de que su hijo nos ha facilitado Datos personales, por favor póngase en contacto con nosotros. Si tenemos conocimiento de que hemos recopilado Datos personales de menores sin verificación del consentimiento parental, tomaremos las medidas necesarias para eliminar esa información de nuestros servidores.</p>
        
        <h2>11. Cambios en esta Política de Privacidad</h2>
        <p>Podemos actualizar nuestra Política de privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de privacidad en esta página.</p>
        <p>Le informaremos por correo electrónico y/o mediante un aviso destacado en nuestro Servicio antes de que el cambio entre en vigor y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de privacidad.</p>
        <p>Le recomendamos que revise esta Política de privacidad periódicamente para comprobar si se han introducido cambios. Los cambios en esta Política de privacidad entran en vigor cuando se publican en esta página.</p>
        
        <h2>12. Contacte con Nosotros</h2>
        <p>Si tiene alguna pregunta sobre esta Política de privacidad, por favor póngase en contacto con nosotros:</p>
        <ul>
          <li>Por correo electrónico: legal@inforia.es</li>
        </ul>
        
        <p><strong>Última actualización:</strong> 5 de abril de 2025</p>
      </div>
    </div>
  );
}
