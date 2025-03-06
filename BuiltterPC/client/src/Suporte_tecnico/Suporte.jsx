import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Divider, List,  Box, Modal, Typography, BottomNavigation, BottomNavigationAction, CircularProgress } from "@mui/material" 
import { SessaoUm, SessaoDois, SessaoTres, SessaoQuatro, SessaoFavorito } from "./Sessoes_suporte.jsx" 
import { Fragment, useState, useEffect } from "react" 
import { VideoHistorico } from './VideoFilter.jsx';
import { baseURL } from '../App.jsx';
import axios from 'axios';
import { previewUser } from '../script.js';


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
    }, [mediaQuery])

    const [value, setValue] = useState('')
    const handleValue = (event, newValue) =>{
        setValue(newValue)
    }

    const [videosFavoritados, setVideosFavoritados] = useState("")
    const [videosVistos, setVideosVistos] = useState("")
    const getAllFavorite = async()=>{
        if(props.logado === true){
            try {
                await axios.post(baseURL+"/favorite/all", {
                    user_id: previewUser.idUser,
                }).then(res=>{
                    setVideosFavoritados(res.data)
                })
            }catch (error) {
                console.log(error)
            }
        }
    }
    const getViews = async() =>{
        if(props.logado === true){
            try {
                await axios.post(baseURL+"/view/all", {
                    user_id: previewUser.idUser,
                }).then(res=>{
                    setVideosVistos(res.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(()=>{
        getAllFavorite();
        getViews();
    },[props.logado]);

    const favoritar = async (n, userId, videoId) =>{
        if (n===1){
            try {
                await axios.post(baseURL+"/videos/favorite",{
                    user_id: userId,
                    video_id: videoId
                }).then(res=>{
                    props.getData()
                    getAllFavorite()
                    props.handleOpenAlert("Video favoritado!", 1)
                })
            } catch (error) {
                console.log()
                props.handleOpenAlert("Erro ao favoritar", 2)
            }
        } else{
            try {
                await axios.post(baseURL+"/videos/updateFavorite",{
                    user_id: userId,
                    video_id: videoId
                }).then(res=>{
                    props.getData()
                    getAllFavorite()
                    props.handleOpenAlert("Video desfavoritado!", 1)
                })
            } catch (error) {
                console.log(error)
                props.handleOpenAlert("Erro ao desfavoritar!", 2)
            }
        }
        
    }
    const visualizar = async (n, userId, videoId, videoEstatisticas) =>{
        if (n === 1){
            try {
                await axios.post(baseURL+"/videos/view", {
                    user_id: userId,
                    video_id: videoId
                }).then(async(res)=>{
                    await axios.post(baseURL+"/view/viewUpdate", {
                        video_estatisticas: videoEstatisticas+1,
                        video_id: videoId
                    }).then(res=>{
                        props.getData()
                        getViews();
                    })
                })
            } catch (error) {
                console.log(error)
            }
        } else{
            try {
                await axios.post(baseURL+"/videos/updateView", {
                    user_id: userId,
                    video_id: videoId
                }).then(res=>{
                    props.getData()
                    getViews();
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return <div className="suporte_container" id="Suporte">

        {match === false ?
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
            </Fragment>  :
            <Fragment>
                    <BottomNavigation className="navSuporteQuery" value={value} onChange={handleValue} sx={{height: "10vh", justifyContent: "start", alignItems: "center"}}>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleFavoritos} icon={<StarIcon/>} label={"Favoritos"} value={"favorito"}/>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleOpenModal} icon={<HistoryIcon/>} label={"Histórico"} value={"historia"}/>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleTopVideos} icon={<BarChartIcon/>} label={"Top videos"} value={"top"}/>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleHardware} icon={<DeveloperBoardIcon/>} label={"Hardware"} value={"hardware"}/>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleSoftware} icon={<WysiwygIcon/>} label={"Software"} value={"software"}/>
                        <BottomNavigationAction sx={{height: "90%", width: "90%"}} onClick={handleTestes} icon={<BugReportIcon/>} label={"Testes"} value={"testes"}/>
                    </BottomNavigation>
            </Fragment>
        }
        <div className="titulo_sessao_container">
            <h1>Suporte Técnico</h1>
            <Divider className="divisor_video" sx={{margin: 1}}/>
        </div>
        {props.videos === "" ? <CircularProgress/> : (<Fragment>
        <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%', transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} className="modal">
                <Typography variant='h3' sx={{fontWeight: '600', width:'90%'}}>Historico</Typography>
                <Divider sx={{margin: 3, width:'90%'}}/>
                <div className='historico_container'>
                    {Array.from(props.videos).map(video => <VideoHistorico key={video.id} idVid={video.id} vistos={videosVistos} video_favorite={video.video_favorite} 
                    visualizar={visualizar} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} 
                    video_estatisticas={video.video_estatisticas} videoAtual={video}/>)}
                </div>
            </Box>
        </Modal>
        
        <Box className="sessao_videos_container">
            {sessao === 0 ? (
            <Fragment>
                <SessaoUm setOpenAviso={props.setOpenAviso} logado={props.logado} videos={props.videos} favoritar={favoritar} visualizar={visualizar} sessao={sessao}/>
            </Fragment> ) :
            sessao === 1 ? (
            <Fragment>
                <SessaoDois setOpenAviso={props.setOpenAviso} logado={props.logado} videos={props.videos} favoritar={favoritar} visualizar={visualizar} sessao={sessao}/>
            </Fragment>) :
            sessao === 2 ? (
            <Fragment>
                <SessaoTres setOpenAviso={props.setOpenAviso} logado={props.logado} videos={props.videos} favoritar={favoritar} visualizar={visualizar} sessao={sessao}/>
            </Fragment>) :
            sessao === 3 ?(
            <Fragment>
                <SessaoQuatro setOpenAviso={props.setOpenAviso} logado={props.logado} videos={props.videos} favoritar={favoritar} visualizar={visualizar} sessao={sessao}/>
            </Fragment>) :
            <Fragment>
                <SessaoFavorito videosFavoritados={videosFavoritados} setOpenAviso={props.setOpenAviso} logado={props.logado} videos={props.videos} favoritar={favoritar} visualizar={visualizar} sessao={sessao}/>
            </Fragment>}
        </Box>
        </Fragment>)}
        

    </div>
}