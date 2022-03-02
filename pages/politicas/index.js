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
                <h2 class="text-center">Términos y Condiciones – Chevrolet Universidad</h2>
              </div>
            </div>
          </div>
          <div class="container">
          <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Aveo
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $2,999.00 
AÑO DE SEGURO GRATIS + 0% CXA
Precio válido en operaciones con GMF para Chevrolet Aveo A/LS/TM 2022. El enganche de $87,465 representa el 35% del costo de la unidad. Con mensualidades desde $3,067.51 pesos, a un plazo de 60 meses, con tasa de 15.87%,  comisión por apertura, año de seguro gratis y anualidades de $20,000 pesos.Promoción válida hasta 04 de marzo de 2022. Las fotografías son de uso ilustrativo.calculado al 1 de febrero   de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Captiva 
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $7,299.00
COMISIÓN POR APERTURA GRATIS
Precio válido en operaciones con GMF para Chevrolet CAPTIVA  A/LS 2022. El enganche de $156,065 representa el 35% del costo de la unidad. Con mensualidades desde $7,229.86 pesos, a un plazo de 60 meses, con tasa de 15.86% , comision por apertura gratis y seguro financiado.Promoción válida hasta 04 de marzo de 2022. Las fotografías son de uso ilustrativo.calculado al 01 de febrero de 2021 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Colorado
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $17,099.00
AÑO DE SEGURO GRATIS
Precio válido en operaciones con GMF para Chevrolet COLORADO  PAQ . D 2022. El enganche de $311,814.99 representa el 35% del costo de la unidad. Con mensualidades desde $17,039.19  pesos, a un plazo de 60 meses, con tasa de 20% , comision por apertura de $20,185.15, año seguro gratis en operaciones de contadoy financiamiento y anualidades de $30,000.Promoción válida hasta 04 de marzo de 2022. Las fotografías son de uso ilustrativo.calculado al 01 de febrero   de 2021 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Suburban
                  </strong>
                </p>
                <p>
                ENGANCHE DESDE 10% + AÑO DE SEGURO GRATIS
Precio válido en operaciones con GMF para Chevrolet SUBURBAN   PAQ . G 2022. El enganche de $625,214.99 representa el 35% del costo de la unidad. Con mensualidades desde $31,292.84  pesos, a un plazo de 60 meses, con tasa de 15.99% , comisión por apertura de $38,513.25, año seguro gratis y anualidades de $50,000.Promoción válida hasta 04 de marzo de 2022. Las fotografías son de uso ilustrativo. calculado al 01 de febrero   de 2021 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.
                </p>
         
              </div>
            </div>
          </div>



          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-center">Términos y Condiciones – Chevrolet Ruiz Cortines</h2>
              </div>
            </div>
          </div>
          <div class="container">
          <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Aveo
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $2,999.00 
AÑO DE SEGURO GRATIS + 0% CXA
Precio válido en operaciones con GMF para Chevrolet Aveo A/LS/TM 2022. El enganche de $87,465 representa el 35% del costo de la unidad. Con mensualidades desde $3,067.51 pesos, a un plazo de 60 meses, con tasa de 15.87%,  comisión por apertura, año de seguro gratis y anualidades de $20,000 pesos.Promoción válida hasta 04 de marzo 2022. Las fotografías son de uso ilustrativo.calculado al 1 de febrero   de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One. 

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Onix
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $3,999.00
AÑO DE SEGURO GRATIS
Precio válido en operaciones con GMF para Chevrolet Onix  A/LS/TM 2022. El enganche de $103,040 representa el 35% del costo de la unidad. Con mensualidades desde $3,979.08 pesos, a un plazo de 60 meses, con tasa de 15.94%,  comisión por apertura de $7,235.51 pesos, año de seguro gratis y anualidades de $22,000 pesos.Promoción válida hasta 04 de Marzo 2022. Las fotografías son de uso ilustrativo.calculado al 1 de Febrero de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Tracker
                  </strong>
                </p>
                <p>
                MENSUALIDAD $4,900.00
0% COMISIÓN POR APERTURA
Precio válido en operaciones con GMF para Chevrolet TRACKER PAQ F 2022. El enganche de $139,516.81 representa el 35% del costo de la unidad. Con mensualidades desde $4,827.82  pesos, a un plazo de 60 meses, con tasa de 14.17% , comision por apertura gratis, seguro de contado y anualidades de $25,000. Promoción válida hasta 04 de Marzo de  2022. Las fotografías son de uso ilustrativo.calculado al 01 de Febrero  de 2022 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

                </p>
         
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                  Colorado
                  </strong>
                </p>
                <p>
                MENSUALIDAD DESDE $17,099.00
AÑO DE SEGURO GRATIS
Precio válido en operaciones con GMF para Chevrolet COLORADO  PAQ . D 2022. El enganche de $311,814.99 representa el 35% del costo de la unidad. Con mensualidades desde $17,039.19  pesos, a un plazo de 60 meses, con tasa de 20% , comision por apertura de $20,185.15, año seguro gratis en operaciones de contadoy financiamiento y anualidades de $30,000.Promoción válida hasta 04 de marzo de 2022. Las fotografías son de uso ilustrativo.calculado al 01 de febrero   de 2021 para fines informativos y de comparación.  Aplican términos y condiciones. Ninguna de las ofertas aplica con otras promociones ni en la compra de vehículos de flotilla. Para mayor información sobre los planes de financiamiento, requisitos de contratación y comisiones con su asesor Chevrolet Car One.

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
