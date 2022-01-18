import React from "react";
import { Container, Divider } from "@material-ui/core";
import ComparativeCarList from "../components/comparative/ComparativeCarList";

const Favoritos = () => {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
   if(localStorage.getItem("favorites")){
    const data = localStorage.getItem("favorites");
    const parseData = JSON.parse(data);
    setDataList(parseData);
   }
  }, []);

  return (
    <Container>
      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "50px" }} />

        {dataList.length !== 0 ? (
          <ComparativeCarList vehicles={dataList} setDataList={setDataList} />
        ) : (
          <p>No tienes autos para comparar. Por favor agrega hasta 4 autos</p>
        )}
      </Container>
    </Container>
  );
};

export default Favoritos;
