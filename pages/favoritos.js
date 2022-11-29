import React from "react";
import { Container, Divider, Tabs, Tab} from "@mui/material";
import {withStyles} from '@mui/styles';
import ComparativeCarList from "../components/comparative/ComparativeCarList";
import ComparativeCarListPreowned from "../components/comparative/ComparativeCarListPreowned";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#6276D9',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const Favoritos = () => {
  const [dataList, setDataList] = React.useState([]);
  const [dataListPreowned, setDataListPreowned] = React.useState([]);
  const [currentTab, setCurrentTab] = React.useState('nuevos')

  React.useEffect(() => {
   if(localStorage.getItem("favorites")){
    const data = localStorage.getItem("favorites");
    const parseData = JSON.parse(data);
    setDataList(parseData);

    const dataP = localStorage.getItem("favorites-seminuevos");
    const parseDataP = JSON.parse(dataP);
    setDataListPreowned(parseDataP);
   }
  }, []);

  const handleDeleteFav = (id) => {
    let arr = dataList;
    arr = arr.filter(item => item._id !== id)
    setDataList(arr)
  }

  const handleDeleteFavSemis = (id) => {
    let arr = dataListPreowned;
    arr = arr.filter(item => item._id !== id)
    setDataListPreowned(arr)
  }

  return (
    <Container maxWidth="lg">
      <Divider/>
      <AntTabs value={currentTab} style={{marginBottom: '2em'}}>
        <AntTab value='nuevos' onClick={()=>setCurrentTab('nuevos')} label='Nuevos'/>
        <AntTab value='semis' onClick={()=>setCurrentTab('semis')} label='Seminuevos'/>
      </AntTabs>

      {
        currentTab === 'nuevos' ? (
          dataList.length !== 0 ? (
            <ComparativeCarList vehicles={dataList} setDataList={setDataList} handleDeleteFav={handleDeleteFav}/>
          ) : (
            <p style={{marginTop: 50}}>No tienes autos nuevos para comparar. Por favor agrega hasta 4 autos</p>
          )
        ) : false
      }

      {
        currentTab === 'semis' ? (
          dataListPreowned.length !== 0 ? (
            <ComparativeCarListPreowned vehicles={dataListPreowned} setDataList={setDataList} handleDeleteFavSemis={handleDeleteFavSemis}/>
            ) : (
              <p style={{marginTop: 50}}>No tienes autos seminuevos para comparar. Por favor agrega hasta 4 autos</p>
              )
        ) : false
      }
    </Container>
  );
};

export default Favoritos;
