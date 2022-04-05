import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Container,
  CardContent,
  Grid,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import Meta from "../../components/Meta";
import useAuth from "../../hooks/useAuth";
import ApplicantComponent from "../../components/profile/Curriculum";
import Information from "../../components/profile/Information";
import PersonalInformation from "../../components/profile/PersonalInformation";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
    minHeight: "100%",
    padding: theme.spacing(5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gridStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem",
  },
  flexStyle: {
    width: "100%",
  },
  avatar: {
    width: "35%",
    height: "auto",
    margin: "0rem auto 1rem auto",
  },
  cardContent: {
    padding: "1.5rem 0rem 1.5rem 0rem",
  },
  container: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
  },
  leftCards: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  noPadding: {
    padding: "0!important",
  },
}));

const index = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Container maxWidth="lg">
        <Meta
          title="Términos y Condiciones"
          description="Pagina de Términos y Condiciones"
        />
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-center">
                  Términos y Condiciones – Chevrolet Universidad
                </h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Aveo</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $3,899.00 AÑO DE SEGURO GRATIS + 0% CXA
                  Precio válido en operaciones con GMF para Chevrolet Aveo C
                  /LT/TM 2022. El enganche de $97,790.00 representa el 35% del
                  costo de la unidad. Con mensualidades desde $3,943.47 pesos, a
                  un plazo de 60 meses, con tasa de 15.87%, comisión por
                  apertura gratis, año de seguro gratis y anualidades de $16,000
                  pesos. Promoción válida hasta 30 de abril de 2022. Las
                  fotografías son de uso ilustrativo.calculado al 1 de abril de
                  2022 para fines informativos y de comparación. Aplican
                  términos y condiciones. Ninguna de las ofertas aplica con
                  otras promociones ni en la compra de vehículos de flotilla.
                  Para mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Captiva</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $6,699.00 COMISION POR APERTURA GRATIS o 6
                  MSI Precio válido en operaciones con GMF para Chevrolet
                  CAPTIVA A /LS 2022. El enganche de $156,415 representa el 35%
                  del costo de la unidad. Con mensualidades desde $6,724.74
                  pesos, a un plazo de 60 meses, con tasa de 15.85%, anualidad
                  de $20,000 pesos, comisión por apertura gratis y 6 meses sin
                  intereses. Promoción válida hasta 30 de abril de 2022. Las
                  fotografías son de uso ilustrativo. Calculado al 01 de abril
                  de 2022 para fines informativos y de comparación. Aplican
                  términos y condiciones. Ninguna de las ofertas aplica con
                  otras promociones ni en la compra de vehículos de flotilla.
                  Para mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Colorado</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $17,099.00 AÑO DE SEGURO GRATIS Precio
                  válido en operaciones con GMF para Chevrolet COLORADO PAQ . D
                  2022. El enganche de $311,814.99 representa el 35% del costo
                  de la unidad. Con mensualidades desde $17,039.19 pesos, a un
                  plazo de 60 meses, con tasa de 20% , comision por apertura de
                  $20,185.15, año seguro gratis en operaciones de contadoy
                  financiamiento y anualidades de $30,000.Promoción válida hasta
                  04 de marzo de 2022. Las fotografías son de uso
                  ilustrativo.calculado al 01 de febrero de 2021 para fines
                  informativos y de comparación. Aplican términos y condiciones.
                  Ninguna de las ofertas aplica con otras promociones ni en la
                  compra de vehículos de flotilla. Para mayor información sobre
                  los planes de financiamiento, requisitos de contratación y
                  comisiones con su asesor Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Suburban</strong>
                </p>
                <p>
                  ENGANCHE DESDE 10% + AÑO DE SEGURO GRATIS Precio válido en
                  operaciones con GMF para Chevrolet SUBURBAN PAQ . G 2022. El
                  enganche de $625,214.99 representa el 35% del costo de la
                  unidad. Con mensualidades desde $31,292.84 pesos, a un plazo
                  de 60 meses, con tasa de 15.99% , comisión por apertura de
                  $38,513.25, año seguro gratis y anualidades de
                  $50,000.Promoción válida hasta 04 de marzo de 2022. Las
                  fotografías son de uso ilustrativo. calculado al 01 de febrero
                  de 2021 para fines informativos y de comparación. Aplican
                  términos y condiciones. Ninguna de las ofertas aplica con
                  otras promociones ni en la compra de vehículos de flotilla.
                  Para mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Onix</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $3,999.00 AÑO DE SEGURO GRATIS Precio válido
                  en operaciones con GMF para Chevrolet Onix A/LS/TM 2022. El
                  enganche de $103,040 representa el 35% del costo de la unidad.
                  Con mensualidades desde $3,976.14 pesos, a un plazo de 60
                  meses, con tasa de 15.94%, comisión por apertura de $7,258.14
                  pesos, año de seguro gratis y anualidades de $22,000
                  pesos.Promoción válida hasta 30 de abril 2021. Las fotografías
                  son de uso ilustrativo.calculado al 1 de abril de 2022 para
                  fines informativos y de comparación. Aplican términos y
                  condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Cavalier</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $5,499. AÑO DE SEGURO GRATIS + BONO DE HASTA
                  $10,000. Precio válido en operaciones con GMF para Chevrolet
                  CAVALIER A/LS/TM 2022. El enganche de $143,465.00 representa
                  el 35% del costo de la unidad. Con mensualidades desde
                  $5,554.66 pesos, a un plazo de 60 meses, con tasa de 12.35%,
                  comisión por apertura de $9,341.95 anualidades de $20,000
                  pesos y año de seguro gratis. Promoción válida hasta 30 de
                  abril de 2022. Las fotografías son de uso ilustrativo.
                  Calculado al 01 de abril de 2022 para fines informativos y de
                  comparación. Aplican términos y condiciones. Ninguna de las
                  ofertas aplica con otras promociones ni en la compra de
                  vehículos de flotilla. Para mayor información sobre los planes
                  de financiamiento, requisitos de contratación y comisiones con
                  su asesor Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Groove</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $4,999.00 TASA ESPECIAL o 12 MESES SIN
                  INTERESES. Precio válido en operaciones con GMF para Chevrolet
                  GROOVE A /LT/ MT 2022. El enganche de $120,540.00 representa
                  el 35% del costo de la unidad. Con mensualidades desde
                  $5,157.59 pesos, a un plazo de 60 meses, con tasa de 12.57%,
                  anualidad de $20,000 pesos o 12 meses sin intereses. Promoción
                  válida hasta 30 de abril de 2022. Las fotografías son de uso
                  ilustrativo. Calculado al 01 de abril de 2021 para fines
                  informativos y de comparación. Aplican términos y condiciones.
                  Ninguna de las ofertas aplica con otras promociones ni en la
                  compra de vehículos de flotilla. Para mayor información sobre
                  los planes de financiamiento, requisitos de contratación y
                  comisiones con su asesor Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Tracker</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $5,699.00 0% COMISION POR APERTURA o 12 MSI
                  Precio válido en operaciones con GMF para Chevrolet TRACKER
                  PAQ F 2022. El enganche de $130,865.00 representa el 35% del
                  costo de la unidad. Con mensualidades desde $5,661.49 pesos, a
                  un plazo de 60 meses, con tasa de 14.03%, anualidad de $23,000
                  pesos, comisión por apertura gratis o 12 meses sin intereses.
                  Promoción válida hasta 30 de abril de 2022. Las fotografías
                  son de uso ilustrativo. Calculado al 01 de abril de 2022 para
                  fines informativos y de comparación. Aplican términos y
                  condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Tahoe</strong>
                </p>
                <p>
                  ARRENDAMIENTO DESDE $22,899.00 AÑO DE SEGURO GRATIS Precio
                  válido en operaciones con GMF Leasing para Chevrolet TAHOE
                  Paq. G 2022. Inversión inicial de $670,615.77 y rentas desde
                  $22,950.39 a un plazo de 48 meses, con factor de arrendamiento
                  desde 14.99% con un valor residual de $729,000 y año de seguro
                  gratis. Al finalizar el término se realiza el pago total de la
                  unidad o bien se puede realizar un refinanciamiento, si se
                  cumple con los requisitos señalados por planta. Calculado al 1
                  de abril de 2022. Promoción válida hasta el 30 de abril de
                  2022. Las fotografías son de uso ilustrativo. Aplican términos
                  y condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-center">
                  Términos y Condiciones – Chevrolet Ruiz Cortines
                </h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Aveo</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $3,899.00 AÑO DE SEGURO GRATIS + 0% CXA
                  Precio válido en operaciones con GMF para Chevrolet Aveo C
                  /LT/TM 2022. El enganche de $97,790.00 representa el 35% del
                  costo de la unidad. Con mensualidades desde $3,943.47 pesos, a
                  un plazo de 60 meses, con tasa de 15.87%, comisión por
                  apertura gratis, año de seguro gratis y anualidades de $16,000
                  pesos. Promoción válida hasta 30 de abril de 2022. Las
                  fotografías son de uso ilustrativo.calculado al 1 de abril de
                  2022 para fines informativos y de comparación. Aplican
                  términos y condiciones. Ninguna de las ofertas aplica con
                  otras promociones ni en la compra de vehículos de flotilla.
                  Para mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Captiva</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $6,699.00 COMISION POR APERTURA GRATIS o 6
                  MSI Precio válido en operaciones con GMF para Chevrolet
                  CAPTIVA A /LS 2022. El enganche de $156,415 representa el 35%
                  del costo de la unidad. Con mensualidades desde $6,724.74
                  pesos, a un plazo de 60 meses, con tasa de 15.85%, anualidad
                  de $20,000 pesos, comisión por apertura gratis y 6 meses sin
                  intereses. Promoción válida hasta 30 de abril de 2022. Las
                  fotografías son de uso ilustrativo. Calculado al 01 de abril
                  de 2022 para fines informativos y de comparación. Aplican
                  términos y condiciones. Ninguna de las ofertas aplica con
                  otras promociones ni en la compra de vehículos de flotilla.
                  Para mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Onix</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $3,999.00 AÑO DE SEGURO GRATIS Precio válido
                  en operaciones con GMF para Chevrolet Onix A/LS/TM 2022. El
                  enganche de $103,040 representa el 35% del costo de la unidad.
                  Con mensualidades desde $3,976.14 pesos, a un plazo de 60
                  meses, con tasa de 15.94%, comisión por apertura de $7,258.14
                  pesos, año de seguro gratis y anualidades de $22,000
                  pesos.Promoción válida hasta 30 de abril 2021. Las fotografías
                  son de uso ilustrativo.calculado al 1 de abril de 2022 para
                  fines informativos y de comparación. Aplican términos y
                  condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Cavalier</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $5,499. AÑO DE SEGURO GRATIS + BONO DE HASTA
                  $10,000. Precio válido en operaciones con GMF para Chevrolet
                  CAVALIER A/LS/TM 2022. El enganche de $143,465.00 representa
                  el 35% del costo de la unidad. Con mensualidades desde
                  $5,554.66 pesos, a un plazo de 60 meses, con tasa de 12.35%,
                  comisión por apertura de $9,341.95 anualidades de $20,000
                  pesos y año de seguro gratis. Promoción válida hasta 30 de
                  abril de 2022. Las fotografías son de uso ilustrativo.
                  Calculado al 01 de abril de 2022 para fines informativos y de
                  comparación. Aplican términos y condiciones. Ninguna de las
                  ofertas aplica con otras promociones ni en la compra de
                  vehículos de flotilla. Para mayor información sobre los planes
                  de financiamiento, requisitos de contratación y comisiones con
                  su asesor Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Groove</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $4,999.00 TASA ESPECIAL o 12 MESES SIN
                  INTERESES. Precio válido en operaciones con GMF para Chevrolet
                  GROOVE A /LT/ MT 2022. El enganche de $120,540.00 representa
                  el 35% del costo de la unidad. Con mensualidades desde
                  $5,157.59 pesos, a un plazo de 60 meses, con tasa de 12.57%,
                  anualidad de $20,000 pesos o 12 meses sin intereses. Promoción
                  válida hasta 30 de abril de 2022. Las fotografías son de uso
                  ilustrativo. Calculado al 01 de abril de 2021 para fines
                  informativos y de comparación. Aplican términos y condiciones.
                  Ninguna de las ofertas aplica con otras promociones ni en la
                  compra de vehículos de flotilla. Para mayor información sobre
                  los planes de financiamiento, requisitos de contratación y
                  comisiones con su asesor Chevrolet Car One.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Tracker</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $5,699.00 0% COMISION POR APERTURA o 12 MSI
                  Precio válido en operaciones con GMF para Chevrolet TRACKER
                  PAQ F 2022. El enganche de $130,865.00 representa el 35% del
                  costo de la unidad. Con mensualidades desde $5,661.49 pesos, a
                  un plazo de 60 meses, con tasa de 14.03%, anualidad de $23,000
                  pesos, comisión por apertura gratis o 12 meses sin intereses.
                  Promoción válida hasta 30 de abril de 2022. Las fotografías
                  son de uso ilustrativo. Calculado al 01 de abril de 2022 para
                  fines informativos y de comparación. Aplican términos y
                  condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One. Chevrolet Car One.
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-center">
                  Términos y Condiciones – Mg Corregidora
                </h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>MG5</strong>
                </p>
                <p>
                MENSUALIDAD DESDE  $3,500 + MG BONUS + Lucky Seven*
Vigencia del 1 al 30 de abril. Aplica para los modelos MG5 ELEGANCE AT 2022 tasa SIN IVA 12.49% + comisión por apertura 2.0% a 72 meses. CAT promedio 25.8% sin IVA. Enganche 64.1% a 72 pagos mensuales de $3,500., comisión por apertura del 2.0%, con póliza de seguro promedio de $9,573.97 pagada dentro del plan de financiamiento seleccionado. Desde 10% de enganche a 60 meses y hasta 72 meses con el 20% de enganche. Sujeto a aprobación de crédito con MG Financial Services. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>MG ZS </strong>
                </p>
                <p>
                 MENSUALIDAD DESDE $3,700 + MG BONUS + Lucky Seven*
Vigencia del 1 al 30 de abril. Aplica para los modelos ZS EXCITE MT 2022 tasa SIN IVA 12.99% + comisión por apertura 2.0% a 72 meses. CAT promedio 24.4% sin IVA. Enganche 40.8% a 72 pagos mensuales de $3,700., comisión por apertura del 2.0%, con póliza de seguro multianual promedio de $9,096.75 pagada de contado. Desde 10% de enganche a 60 meses y hasta 72 meses con el 20% de enganche. Sujeto a aprobación de crédito con MG Financial Services. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.

                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>MG HS</strong>
                </p>
                <p>
                
Vigencia del 1 al 30 de abril. Aplica para los modelos HS 2022. Desde 10% de enganche a 60 meses y hasta 72 meses con el 20% de enganche. Sujeto a aprobación de crédito con MG Financial Services. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>MG RX8 ELEGANCE </strong>
                </p>
                <p>
               
 DESDE $799,900 + Lucky Seven*
Vigencia del 1 al 30 de abril. Aplica para el modelo RX8 ELEGANCE 2022. Desde 10% de enganche a 60 meses y hasta 72 meses con el 20% de enganche. Sujeto a aprobación de crédito con MG Financial Services. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>MG GT</strong>
                </p>
                <p>
Vigencia del 1 al 30 de abril. Aplica para los modelos MG GT 2022. Desde 10% de enganche a 60 meses y hasta 72 meses con el 20% de enganche. Sujeto a aprobación de crédito con MG Financial Services. Precios y promociones sujetas a cambios sin previo aviso. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;
