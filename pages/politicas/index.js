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
                <h2 class="text-center">Términos y Condiciones – Chevrolet</h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  <strong>
                    *NUEVO CAVALIER 2022 TURBO Seguro Gratis, Incluye placas.
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero 2022. Aplica para los modelos
                  CAVALIER 2022. Precios y promociones sujetas a cambios sin
                  previo aviso. Imágenes de uso ilustrativo. TOMAMOS TU AUTO A
                  CUENTA. Incluye placas dentro de tu financiamiento.
                </p>
                <p>
                  <strong>
                    * NUEVO CAVALIER 2022 TURBO Bono de $10,000.00 mil pesos
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero 2022. Aplica dejando un auto a
                  cuenta suv o sedan mayor al 2015 o solo comprobando ser dueño
                  de algún sedan o suv 2015 en adelante. &nbsp;Precios y
                  promociones sujetas a cambios sin previo aviso. Imágenes de
                  uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <p>
                  <strong>
                    *NUEVA GROOVE 2022 Mensualidad desde $4,999.00 Con Tasa
                    desde 12.49*{" "}
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero 2022. Aplica para Groove Ls std
                  paq A. Con 35% de enganche a 60 meses Y anualidades de
                  $25,000.00. Sujeto a aprobación de crédito con GMF. Precios y
                  promociones sujetas a cambios sin previo aviso. Imágenes de
                  uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <p>
                  <strong>
                    *SILVERADO CAB REGULAR 4X4 2022 RENTA MENSUAL DESDE
                    $10,599.00*{" "}
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero 2022. Aplica para SILVERADO 4X4
                  PAQ O 2022. Con 40% de enganche a 48 meses más seguro de
                  contado. Como valor residual se pagaría $295,000.00 más iva.
                  Sujeto a aprobación de Arrendamiento con GMF. &nbsp;Precios y
                  promociones sujetas a cambios sin previo aviso. Imágenes de
                  uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <p>
                  <strong>
                    *ONIX 2022 Mensualidad desde $3,899.00 + Año Seg Gratis y
                    hasta 6 Meses sin Intereses *
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero 2022. Aplica para ONIX LS STD
                  PAQ A 2022. Con 35% de enganche a 60 meses Y anualidades de
                  $25,000.00 mil pesos. Para aplicar los 6 meses sin intereses
                  es necesario dar un 35% Enganche y financiar a 6 meses máximo.
                  Sujeto a aprobación de crédito con GMF. Precios y promociones
                  sujetas a cambios sin previo aviso. Imágenes de uso
                  ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <p>
                  <strong>
                    *AVEO LT STD 2022 Mensualidad desde $2,999.00 + 0%CxA + Año
                    Seg Gratis *
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero. Aplica para AVEO LT STD PAQ C
                  2022. Con 35% de enganche a 60 meses Y anualidades de
                  $25,000.00 mil pesos. Sujeto a aprobación de crédito con GMF.
                  Precios y promociones sujetas a cambios sin previo aviso.
                  Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <p>
                  <strong>
                    *TRACKER 2022 Mensualidad desde $5,999.00 + 0% CxA{" "}
                  </strong>
                </p>
                <p>
                  Vigencia del 1 al 31 de Enero. Aplica para AVEO LT STD PAQ C
                  2022. Con 35% de enganche a 60 meses Y anualidades de
                  $30,000.00 mil pesos. Sujeto a aprobación de crédito con GMF.
                  Precios y promociones sujetas a cambios sin previo aviso.
                  Imágenes de uso ilustrativo. TOMAMOS TU AUTO A CUENTA.
                </p>
                <h4>*CHEYENNE 4×4 cabina regular Enganche $73,000</h4>
                <p>
                  Precio válido en operaciones con GMF Leasing para Chevrolet
                  Cheyenne Paq H. Inversión inicial desde $73,047.35 pesos y
                  rentas desde $23,807.86 pesos a un plazo de 48 meses. Al
                  finalizar el término se realiza el pago total de la unidad o
                  bien se puede realizar un refinanciamiento, si se cumple con
                  los requisitos señalados por planta. Calculado al 07 de Enero
                  2022. Promoción válida al 31 de enero 2022. Las fotografías
                  son de uso ilustrativo. Aplican términos y condiciones.
                  Ninguna de las ofertas aplica con otras promociones ni en la
                  compra de vehículos de flotilla. Para mayor información sobre
                  los planes de financiamiento, requisitos de contratación y
                  comisiones con su asesor de ventas Car One Chevrolet.
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
