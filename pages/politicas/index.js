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
                MENSUALIDAD DESDE $2,999.00
AÑO DE SEGURO GRATIS + 0% CXA

Precio válido en operaciones con GMF para Chevrolet Aveo A/LS/TM 2022. El enganche de $87,815 representa el 35% del costo de la unidad. Con mensualidades desde $3,065.07 pesos, a un plazo de 60 meses, con tasa de 15.87%,  comisión por apertura, año de seguro gratis y anualidades de $20,000 pesos.Promoción válida hasta 05 de abril del 2022. Las fotografías son de uso ilustrativo.calculado al 1 de marzo   de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Captiva</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $7,299.00 COMISIÓN POR APERTURA GRATIS
                  Precio válido en operaciones con GMF para Chevrolet CAPTIVA
                  A/LS 2022. El enganche de $156,065 representa el 35% del costo
                  de la unidad. Con mensualidades desde $7,229.86 pesos, a un
                  plazo de 60 meses, con tasa de 15.86% , comision por apertura
                  gratis y seguro financiado.Promoción válida hasta 04 de marzo
                  de 2022. Las fotografías son de uso ilustrativo.calculado al
                  01 de febrero de 2021 para fines informativos y de
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
                MENSUALIDAD DESDE $3,999.00
AÑO DE SEGURO GRATIS

Precio válido en operaciones con GMF para Chevrolet Onix  A/LS/TM 2022. El enganche de $103,040 representa el 35% del costo de la unidad. Con mensualidades desde $3,976.14 pesos, a un plazo de 60 meses, con tasa de 15.94%,  comisión por apertura de $7,258.14 pesos, año de seguro gratis y anualidades de $22,000 pesos. Promoción válida hasta 05 de abril del 2022. Las fotografías son de uso ilustrativo.calculado al 1 de Marzo   de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One. 


                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Cavalier</strong>
                </p>
                <p>
                MENSUALIDAD DESDE $6,599.
AÑO DE SEGURO GRATIS.

Precio válido en operaciones con GMF para Chevrolet CAVALIER A/LS/TM 2022. El enganche de $141,365 representa el 35% del costo de la unidad. Con mensualidades desde $6629.05 pesos, a un plazo de 60 meses, con tasa de 12.29%, comisión por apertura de $7,983.47 y año de seguro gratis. Promoción válida hasta 05 de abril del 2022. Las fotografías son de uso ilustrativo. Calculado al 01 de marzo de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>Groove</strong>
                </p>
                <p>
                MENSUALIDAD DESDE $6,399.00
TASA ESPECIAL + 12 MESES SIN INTERESES.

Precio válido en operaciones con GMF para Chevrolet GROOVE B /LT/ AT  2022. El enganche de $127,890 representa el 35% del costo de la unidad. Con mensualidades desde $6,495.63 pesos, a un plazo de 60 meses, con tasa de 13.99%, anualidad de $15,000 pesos, tasa especial desde 12.49% con GMF y 12 meses sin intereses. Promoción válida hasta 05 de abril del 2022. Las fotografías son de uso ilustrativo. Calculado al 01 de marzo de 2021 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>TRACKER</strong>
                </p>
                <p>
                MENSUALIDAD DESDE $5,399.00
0% COMISION POR APERTURA + 12 MSI

Precio válido en operaciones con GMF para Chevrolet TRACKER PAQ F 2022. El enganche de $130,515.00 representa el 35% del costo de la unidad. Con mensualidades desde $5,436.51 pesos, a un plazo de 60 meses, con tasa de 14.01%, anualidad de $15,000 pesos, comisión por apertura gratis y 12 meses sin intereses. Promoción válida hasta 05 de abril del 2022. Las fotografías son de uso ilustrativo. Calculado al 01 de marzo de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

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
                  MENSUALIDAD DESDE $2,999.00 AÑO DE SEGURO GRATIS + 0% CXA
                  Precio válido en operaciones con GMF para Chevrolet Aveo
                  A/LS/TM 2022. El enganche de $87,815 representa el 35% del
                  costo de la unidad. Con mensualidades desde $3,065.07 pesos, a
                  un plazo de 60 meses, con tasa de 15.87%, comisión por
                  apertura, año de seguro gratis y anualidades de $20,000
                  pesos.Promoción válida hasta 05 de abril del 2022. Las
                  fotografías son de uso ilustrativo.calculado al 1 de marzo de
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
                  <strong>Onix</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $3,999.00 AÑO DE SEGURO GRATIS Precio válido
                  en operaciones con GMF para Chevrolet Onix A/LS/TM 2022. El
                  enganche de $103,040 representa el 35% del costo de la unidad.
                  Con mensualidades desde $3,976.14 pesos, a un plazo de 60
                  meses, con tasa de 15.94%, comisión por apertura de $7,258.14
                  pesos, año de seguro gratis y anualidades de $22,000
                  pesos.Promoción válida hasta 05 de abril del 2022. Las
                  fotografías son de uso ilustrativo.calculado al 1 de Marzo de
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
                  <strong>Tracker</strong>
                </p>
                <p>
                  MENSUALIDAD $4,900.00 0% COMISIÓN POR APERTURA Precio válido
                  en operaciones con GMF para Chevrolet TRACKER PAQ F 2022. El
                  enganche de $139,516.81 representa el 35% del costo de la
                  unidad. Con mensualidades desde $4,827.82 pesos, a un plazo de
                  60 meses, con tasa de 14.17% , comision por apertura gratis,
                  seguro de contado y anualidades de $25,000. Promoción válida
                  hasta 04 de Marzo de 2022. Las fotografías son de uso
                  ilustrativo.calculado al 01 de Febrero de 2022 para fines
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
                  <strong>Cavalier</strong>
                </p>
                <p>
                  MENSUALIDAD DESDE $4,999.00 AÑO DE SEGURO GRATIS Precio válido
                  en operaciones con GMF para Chevrolet CAVALIER A/LS/TM 2022.
                  El enganche de $141,365 representa el 35% del costo de la
                  unidad. Con mensualidades desde $5,126.78 pesos, a un plazo de
                  60 meses, con tasa de 12.35%, comisión por apertura de
                  $9,284.93 anualidades de $25,000 pesos y año de seguro gratis.
                  Promoción válida hasta 05 de abril del 2022. Las fotografías
                  son de uso ilustrativo. Calculado al 01 de marzo de 2022 para
                  fines informativos y de comparación. Aplican términos y
                  condiciones. Ninguna de las ofertas aplica con otras
                  promociones ni en la compra de vehículos de flotilla. Para
                  mayor información sobre los planes de financiamiento,
                  requisitos de contratación y comisiones con su asesor
                  Chevrolet Car One.
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
