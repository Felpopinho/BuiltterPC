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
import { Divider, List, Input, Box, Button } from "@mui/material" 
import { SessaoUm, SessaoDois, SessaoTres, SessaoQuatro, SessaoFavorito } from "./Sessoes_suporte" 
import { Fragment, useState } from "react" 

export function Suporte(){

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
        setSessao(sessao = 4)
    }

    return <div className="suporte_container" id="Suporte">

        <div className="nav_suporte_container">
            <h1>Videos buillterPC</h1>
            <List sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", marginLeft: 2}} className="nav_list">
                <Box sx={{display: "flex", alignItems: "center", width: '100%'}}>
                    <Input className="barra_pesquisa" type="text" placeholder="Pesquise algum vídeo" sx={{color: '#a3a3a3', width: '100%'}}></Input>
                    <Button>
                        <SearchIcon/>
                    </Button>
                </Box>
                <Divider sx={{margin: 2}}/>
                <h2>Suporte</h2>
                <a href="#Menu"><HomeIcon/> Menu</a>
                <button onClick={handleFavoritos}><StarIcon/> Favoritos</button>
                <Divider sx={{margin: 2}}/>
                <h2>Usuário</h2>
                <a href=""><PersonIcon/> Perfil</a>
                <a href=""><HistoryIcon/> Histórico</a>
                <a href=""><OndemandVideoIcon/> Seus vídeos</a>
                <Divider sx={{margin: 2}}/>
                <h2>Descubra</h2>
                <button onClick={handleTopVideos}><BarChartIcon/> Top videos</button>
                <button onClick={handleHardware}><DeveloperBoardIcon/> Hardware</button>
                <button onClick={handleSoftware}><WysiwygIcon/> Software</button>
                <button onClick={handleTestes}><BugReportIcon/>Testes</button>
                <Divider sx={{margin: 2}}/>
                <h2>Veja também</h2>
                <a href="#Simulacao">Simulaçao</a>
                <a href="#Promocao">Promoções</a>
                <a href="#Forum">Forum</a>
            </List>
        </div>

        <div className="titulo_sessao_container">
            <h1>Suporte Técnico</h1>
            <Divider className="divisor_video" sx={{margin: 1}}/>
        </div>

        <Box className="sessao_videos_container">
            {sessao === 0 ? (
            <Fragment>
                <SessaoUm/>
            </Fragment> ) :
            sessao === 1 ? (
            <Fragment>
                <SessaoDois/>
            </Fragment>) :
            sessao === 2 ? (
            <Fragment>
                <SessaoTres/>
            </Fragment>) :
            sessao === 3 ?(
            <Fragment>
                <SessaoQuatro/>
            </Fragment>) :
            <Fragment>
                <SessaoFavorito/>
            </Fragment>}
        </Box>

    </div>
}