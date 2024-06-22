import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BugReportIcon from '@mui/icons-material/BugReport';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, Input, Box, Button, Modal, Typography, ThemeProvider, BottomNavigation, BottomNavigationAction } from "@mui/material" 
import { SessaoUm, SessaoDois, SessaoTres, SessaoQuatro, SessaoFavorito } from "./Sessoes_suporte" 
import { Fragment, useState, useEffect } from "react" 
import { suporteLista } from '../script';
import { VideoHistorico } from './Video-historico';
import { darkTheme } from '../App';


export function Suporte(props){

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () =>{
        {props.logado === true ? setOpenModal(true) : props.setOpenAviso(true) }
    }
    const handleCloseModal = () =>{
        setOpenModal(false)
    }

    let [sessao, setSessao] = useState(0);

    const handleTopVideos = () =>{
        setSessao(sessao = 0);
    }
    const handleHardware = () =>{
        setSessao(sessao = 1);
    }
    const handleSoftware = () =>{
        setSessao(sessao = 2);
    }
    const handleTestes = () =>{
        setSessao(sessao = 3);
    }
    const handleFavoritos = () =>{
        {props.logado === true ? setSessao(sessao = 4) : props.setOpenAviso(true) }
    }

    const [match, setMatch] = useState(false)
    var mediaQuery = window.matchMedia("(max-width: 800px)")

    const mediaQueryFunction = () =>{
        if (mediaQuery.matches){
            setMatch(true)
        } else{
            setMatch(false)
        }
    }

    useEffect(() => {
        mediaQueryFunction()
    })

    mediaQuery.addEventListener('change', ()=>{
        mediaQueryFunction()
    })

    const [value, setValue] = useState('')
    const handleValue = (event, newValue) =>{
        setValue(newValue)
    }

    return <div className="suporte_container" id="Suporte">

        {match === false ?
        <ThemeProvider theme={darkTheme}>
            <Fragment>
                <Box className="nav_suporte_container"> 
                    <h1>Explore</h1>
                    <Divider sx={{margin: 1}}/>
                    <List sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", marginLeft: 2}} className="nav_list">
                        <h2>BuillterPC</h2>
                        <a href="#Menu"><HomeIcon/> Menu</a>
                        <Divider sx={{margin: 1}}/>
                        <h2>Usuário</h2>
                        <button onClick={handleFavoritos}><StarIcon/> Favoritos</button>
                        <button onClick={handleOpenModal}><HistoryIcon/> Histórico</button>
                        <Divider sx={{margin: 1}}/>
                        <h2>Descubra</h2>
                        <button onClick={handleTopVideos}><BarChartIcon/> Top videos</button>
                        <button onClick={handleHardware}><DeveloperBoardIcon/> Hardware</button>
                        <button onClick={handleSoftware}><WysiwygIcon/> Software</button>
                        <button onClick={handleTestes}><BugReportIcon/>Testes</button>
                        <Divider sx={{margin: 1}}/>
                        <h2>Veja também</h2>
                        <a href="#Simulacao">Simulaçao</a>
                        <a href="#Promocao">Promoções</a>
                        <a href="#Forum">Forum</a>
                    </List>
                </Box>
            </Fragment> 
        </ThemeProvider> :
            <Fragment>
                <ThemeProvider theme={darkTheme}>
                    <BottomNavigation className="navSuporteQuery" value={value} onChange={handleValue} sx={{height: "10vh"}}>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleFavoritos} icon={<StarIcon/>} label={"Favoritos"} value={"favorito"}/>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleOpenModal} icon={<HistoryIcon/>} label={"Histórico"} value={"historia"}/>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleTopVideos} icon={<BarChartIcon/>} label={"Top videos"} value={"top"}/>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleHardware} icon={<DeveloperBoardIcon/>} label={"Hardware"} value={"hardware"}/>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleSoftware} icon={<WysiwygIcon/>} label={"Software"} value={"software"}/>
                        <BottomNavigationAction sx={{height: "100%"}} onClick={handleTestes} icon={<BugReportIcon/>} label={"Testes"} value={"testes"}/>
                    </BottomNavigation>
                </ThemeProvider>
            </Fragment>
        }

        <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} className="modal">
                <Typography variant='h3' sx={{fontWeight: '600', width:'90%'}}>Historico</Typography>
                <Divider sx={{margin: 3, width:'90%'}}/>
                <div className='historico_container'>
                    {suporteLista.map(video => video.video_view === 'view' ? (<VideoHistorico video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>) : (console.log()))}
                </div>
            </Box>
        </Modal>

        

        <div className="titulo_sessao_container">
            <h1>Suporte Técnico</h1>
            <Divider className="divisor_video" sx={{margin: 1}}/>
        </div>

        <Box className="sessao_videos_container">
            {sessao === 0 ? (
            <Fragment>
                <SessaoUm setOpenAviso={props.setOpenAviso} logado={props.logado}/>
            </Fragment> ) :
            sessao === 1 ? (
            <Fragment>
                <SessaoDois setOpenAviso={props.setOpenAviso} logado={props.logado}/>
            </Fragment>) :
            sessao === 2 ? (
            <Fragment>
                <SessaoTres setOpenAviso={props.setOpenAviso} logado={props.logado}/>
            </Fragment>) :
            sessao === 3 ?(
            <Fragment>
                <SessaoQuatro setOpenAviso={props.setOpenAviso} logado={props.logado}/>
            </Fragment>) :
            <Fragment>
                <SessaoFavorito setOpenAviso={props.setOpenAviso} logado={props.logado}/>
            </Fragment>}
        </Box>

    </div>
}