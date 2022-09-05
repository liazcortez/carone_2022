import React, { Fragment } from "react";
import { Container, Typography } from "@mui/material";
import useStore from '../../hooks/useStore';
import parse from "html-react-parser";
import { CapitalizeV2 } from "../../utils/capitalize";

const index = () => {

  const { policies, getPolicies } = useStore()
  
  React.useEffect(()=>{
    getPolicies()
    //eslint-disable-next-line
  },[])

  return (
    <Container maxWidth="lg">
      {
        policies.map(item => {

          if(item.policy && item.policy !== '<p></p>'){
            return (
              <Fragment>
                <Typography variant='h6'>{CapitalizeV2(item.name)}</Typography>
                {parse(item.policy)}
              </Fragment>
            )
          }

        }
        )
      }

   <Typography style={{fontWeight: '600', textAlign: 'center', fontSize: 24}}>Aviso de Privacidad</Typography>
     <Typography style={{fontWeight: '600', textAlign: 'center', marginBottom: 10, fontSize: 24}}>Car one Group</Typography>
    
     <Typography style={{marginTop: 10, textAlign: 'justify'}}>
          Car One Group S.A. de C.V. con domicilio para oír y recibir notificaciones en Avenida San Jerónimo número 101 Poniente, Colonia San Jerónimo, Código Postal 64640 en la ciudad de Monterrey, N. L., es el responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente: que mediante el presente Aviso de Privacidad se hace de su conocimiento que la información que se recabe, derivado de la relación contractual que exista entre usted y nuestra razón social y sea concerniente a sus datos personales de identificación, contacto, laborales y patrimoniales, será manejada con absoluta confidencialidad. Por lo que el tratamiento de obtención, uso, divulgación y almacenamiento de dichos datos será utilizado para las siguientes finalidades principales que son necesarias para el servicio que solicita:
      </Typography>
    
     <Typography style={{marginTop: 15, textAlign: 'justify'}}>
          <span>*</span> 
          Dar el debido cumplimento a las obligaciones que se deriven del vínculo jurídico establecido entre usted y nuestra razón social.
      </Typography>
    
     <Typography style={{marginTop: 5, textAlign: 'justify'}}>
          <span>*</span> 
          Cumplir con la legislación aplicable.
        </Typography>
      
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          <span>*</span> 
          Verificar y confirmar su identidad.
      </Typography>
      

     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          <span>*</span> 
          Ofrecer soporte técnico sobre los productos que usted tenga contratados.
      </Typography>

     <Typography  style={{marginTop: 5}}>
          <span>*</span> 
          Atender y dar seguimiento a sus solicitudes de servicio.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle un mejor servicio:
      </Typography>
    
     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          <span>*</span> 
          Realizar encuestas de satisfacción y estudios de mercado con invitación a participar en los mismos.
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          <span>*</span> 
          Usar datos para fines estadísticos, financieros, administrativos y control de calidad de nuestra razón.
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          <span>*</span> 
          Informar respecto a nuevas opciones de servicios y productos que nuestra razón social ofrece actualmente u ofrezca en un futuro.
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          <span>*</span> 
          Captación de nuevos clientes.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          En caso de que NO desee que sus datos personales se utilicen para estas finalidades secundarias, por favor indíquelo a continuación (la negativa del uso de información personal para estos fines no será motivo de negación de los servicios y productos que solicita o contrata):
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          Finalidad secundaria A)
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          Finalidad secundaria B)
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          Finalidad secundaria C)
      </Typography>
     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          Finalidad secundaria D)
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          Se le informa que podrá mantener en sus registros, tanto físicos como electrónicos, toda la información que nos haya sido facilitada por usted a fin de recabar sus datos personales. Sin embargo, usted tiene derecho a conocer qué datos personales suyos tenemos, para qué los utilizamos y las condiciones del uso que les damos (Acceso); también es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO. En caso de querer ejercer sus derechos ARCO, conocer el procedimiento y los requisitos necesarios, deberá solicitar el formato correspondiente acudiendo al domicilio señalado o por vía correo electrónico a ARCO@carone.com.mx y atendiendo cualquier duda que pudiera tener respecto al tratamiento de su información personal.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          Nos permitimos informarle que el Aviso de Privacidad lo puede consultar en nuestra página de internet http://www.carone.com.mx/aviso-de- privacidad/. , sitio en donde también lo mantendremos informado sobre los cambios, modificaciones o actualizaciones que pueda sufrir derivado de nuevos requerimientos legales, de nuestras propias necesidades por los productos o servicios que ofrecemos, de nuestras prácticas de privacidad, de cambios en nuestro modelo de negocio o por otras causas que se le darán a conocer en tiempo y forma conforme a las disposiciones legales aplicables y los medios pertinentes para tal efecto.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify', fontWeight: '700'}}>
          CONSENTIMIENTO EXPRESO DEL CLIENTE SOBRE EL AVISO DE PRIVACIDAD.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          Reconozco que he leído y entiendo los alcances del Aviso de Privacidad de nuestra Razón Social antes señalado y Autorizó de forma expresa recabar y tratar mis datos personales para los fines establecidos y de conformidad con lo previsto en el presente Aviso de Privacidad y entiendo que el mismo pueda ser modificado de tiempo y forma conforme a las disposiciones legales aplicables.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          Autorizo de forma expresa a transmitir y transferir mis datos personales de conformidad con y a las personas previstas en el presente Aviso de Privacidad, incluyendo enunciativa mas no limitativamente, a CAR ONE MONTERREY, SA. DE C.V. y entiendo que el mismo pueda ser modificado de tiempo y forma conforme a las disposiciones legales aplicable.
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify', fontWeight: '700'}}>
          CAMBIOS AL AVISO DE PRIVACIDAD
      </Typography>

     <Typography  style={{marginTop: 15 ,textAlign: 'justify'}}>
          A. Avisos en nuestras Agencias.
      </Typography>

     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          B. Via correo electrónico.
      </Typography>

     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          C. Aviso en el portal de Internet 
      </Typography>
     <Typography>
          http://www.carone.com.mx/aviso-de-privacidad/.
      </Typography>


     <Typography  style={{marginTop: 5 ,textAlign: 'justify'}}>
          D. Cualquier otro medio de comunicación público o privado previstos en los contratos que amparan las operaciones celebradas entre Ud. y nuestra Razón Social.
      </Typography>
    </Container>
  );
};

export default index;
