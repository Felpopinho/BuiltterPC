import { Box, Button, FormControl, IconButton, Tab, Tabs, TextField, InputAdornment, Menu, Divider, List, MenuItem, Modal, FormHelperText, Select, InputLabel, BottomNavigation, BottomNavigationAction} from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import { Search } from "@mui/icons-material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Pessoas, Amigos } from "./Pessoas";
import { Postagens } from "./Postagens";
import axios from "axios";
import { baseURL } from "../App";
import { Respostas } from "./Respostas";
import Close from '@mui/icons-material/Close'
import { previewUser } from "../script";
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';

export function Forum(props){

    const ref = useRef()

    const [anchorEl, setAnchorEl] = useState(null)
    const openFiltro = Boolean(anchorEl)
    const handleFiltro = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseFiltro = (filtro) => {
        props.setValueFiltro(filtro)
        setAnchorEl(null)
    }

    const [valueTipo, setValueTipo] = useState("1");
    const handleTipo = (e,v) =>{
        setValueTipo(v)
    }

    const [vendoResposta, setVendoResposta] = useState(false)
    const [post, setPost] = useState()
    const [respostas, setRespostas] = useState(null)

    const handleResposta = async (id) =>{
        setPost(id)
        try {
            await axios.get(baseURL+"/respostas").then(res=>{
                setRespostas(res.data)
                setVendoResposta(true)
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const [modalPost, setModalPost] = useState(false)

    const handleCriarPostagem = (n) =>{
        if (props.logado===false){
            props.setOpenAviso(true)
        }else{
            if (n === 1){
                setModalPost(true)
            } else{
                setValueTitulo("")
                setHelpTitulo(0)
                setValueDesc("")
                setHelpDesc(0)
                setModalPost(false)
            }
        }
    }

    const [valueType, setValueType] = useState("");

    const handleSelectType = (e) =>{
        setValueType(e.target.value)
    }

    const [valueTitulo, setValueTitulo] = useState("");
    const [helpTitulo, setHelpTitulo] = useState(0);
    const [valueDesc, setValueDesc] = useState("");
    const [helpDesc, setHelpDesc] = useState(0);

    const handleTitulo = (e) =>{
        setValueTitulo(e.target.value)
        const tempValueTitulo = e.target.value
        setHelpTitulo(tempValueTitulo.length)
    }
    const handleDesc = (e) =>{
        setValueDesc(e.target.value)
        const tempValueDesc = e.target.value
        setHelpDesc(tempValueDesc.length)
    }

    const publicarPost = async (e) =>{
        e.preventDefault()

        const comment = ref.current

        try {
            await axios.post(baseURL+"/comentarios/add", {
                forum_id: previewUser.idUser,
                forum_descricao: comment.descricao.value,
                forum_tipo: comment.tipo.value,
                forum_titulo: comment.titulo.value,
                forum_curtidas: 0
            }).then(res =>{
                props.getData()
                handleCriarPostagem(2)
                props.handleOpenAlert("Postagem publicada!", 1)
            })
        } catch (error) {
            console.log(error)
            props.handleOpenAlert("Error ao publicar!", 2)
        }
    }

    const [match, setMatch] = useState(false)
    var mediaQuery = window.matchMedia("(max-width: 1040px)")

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

    const [valueFiltro, setValueFiltro] = useState('tudo')
    const handleValueFiltro = (event, newValue) =>{
        setValueFiltro(newValue)
    }
    const [valuePeople, setValuePeople] = useState('')
    const handleValuePeople = (event, newValue) =>{
        setValuePeople(newValue)
    }
    const [amigosModal, setAmigosModal] = useState(false)
    const [pessoasModal, setPessoasModal] = useState(false)

    const handleOpenAmigos = () =>{
        setPessoasModal(false)
        setAmigosModal(true)
    }
    const handleOpenPessoas = () =>{
        setAmigosModal(false)
        setPessoasModal(true)
    }
    const handleCloseAmigos = () =>{
        setAmigosModal(false)
        setValuePeople('')
    }
    const handleClosePessoas = () =>{
        setPessoasModal(false)
        setValuePeople('')
    }

    return <div className="forum_container" id="Forum">
        <Box sx={{display: "flex", alignItems: "center", height: "15vh", justifyContent: "space-between"}}>

            <h1 className="tituloForum">FORUM</h1>

            <Button variant="contained" sx={{height: "50px"}} onClick={()=>{handleCriarPostagem(1)}}>
                Criar postagem
            </Button>

            <TextField label="Pesquisar" sx={{display: "flex", flexGrow: "0.5"}} InputProps={{
            endAdornment: (
            <InputAdornment position="end" >
              <IconButton sx={{padding:"0", margin: "0"}}><Search/></IconButton>
            </InputAdornment>
            ),
            }}/>

            <Box sx={{display: "flex", height: "50px"}}>
                <Button onClick={handleFiltro}>Filtro <FilterAltIcon/></Button>
                <Menu anchorEl={anchorEl} open={openFiltro} onClose={()=>{handleCloseFiltro("id")}}>
                    <MenuItem onClick={()=>{handleCloseFiltro("id")}}>Recentes</MenuItem>
                    <MenuItem onClick={()=>{handleCloseFiltro("forum_curtidas")}}>Relevantes</MenuItem>
                </Menu>
            </Box>
        </Box>
        <Divider/>
        <Box className="mainContainer">

            <Box className="Filtros">
                <Box sx={{width: '100%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                    <Box sx={{width: '80%', height: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>

                        {match === false ?
                            <Fragment>
                                <h2 style={{height: "5vh", display: "flex", alignItems: "center"}}>Tipos</h2>
                                <Tabs onChange={handleTipo} value={valueTipo} orientation="vertical" sx={{width: '100%'}}>
                                    <Tab value="1" label="Tudo"/>
                                    <Tab value="2" label="Hardware"/>
                                    <Tab value="3" label="Software"/>
                                    <Tab value="4" label="Programaçao"/>
                                </Tabs>
                            </Fragment> :
                            <BottomNavigation value={valueFiltro} onChange={handleValueFiltro} sx={{display: "flex", flexDirection: "column", height: "30vh"}}>
                                <BottomNavigationAction onClick={()=>{setValueTipo("1")}} icon={<BorderAllIcon/>} label={"Tudo"} value={"tudo"}/>
                                <BottomNavigationAction onClick={()=>{setValueTipo("2")}} icon={<DeveloperBoardIcon/>} label={"Hardware"} value={"hardware"}/>
                                <BottomNavigationAction onClick={()=>{setValueTipo("3")}} icon={<WysiwygIcon/>} label={"Software"} value={"software"}/>
                                <BottomNavigationAction onClick={()=>{setValueTipo("4")}} icon={<CodeIcon/>} label={"Programaçao"} value={"programacao"}/>
                            </BottomNavigation>
                        }
                    </Box>
                    <Divider orientation="horizontal" sx={{margin: 1, width: "90%"}}/>
                    <Box sx={{display: "flex", width: '80%', alignItems: "center", flexDirection: "column"}}>
                    {match === false ? <Fragment>
                        <h2 style={{height: "5vh", display: "flex", alignItems: "center"}}>Amigos</h2>

                        <Box sx={{display: "flex",overflowY: "scroll", width: '100%'}}>
                            <List>
                                {props.amigos.lenght ? Array.from(props.users).map(amigo => <Amigos key={amigo.id} id={amigo.id} nome={amigo.nome} perfil={amigo.perfil} titulo={amigo.titulo} amigos={props.amigos}/>) : <p>Você não tem nenhum amigo ainda</p> }
                            </List>
                        </Box> </Fragment>: <Fragment>
                        <BottomNavigation value={valuePeople} onChange={handleValuePeople} sx={{display: "flex", flexDirection: "column", height: "15vh"}}>
                            <BottomNavigationAction onClick={()=>{handleOpenAmigos()}} icon={<PeopleAltIcon/>} label={"Amigos"} value={"amigos"}/>
                            <BottomNavigationAction onClick={()=>{handleOpenPessoas()}} icon={<GroupsIcon/>} label={"Pessoas"} value={"pessoas"}/>
                        </BottomNavigation>
                        <Modal open={amigosModal} onClose={()=> {handleCloseAmigos()}}>
                            <Box sx={props.amigos.lenght ? {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4, height: "90%", overflowY: "scroll"} : {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4, width: "90%"}}>
                                <h1 style={{textAlign: "center"}}>Amigos:</h1>
                                <List sx={props.amigos.lenght ? {} : {display: "flex", alignItems: "center", height: "100%"}}>
                                    {props.amigos.lenght ? Array.from(props.users).map(amigo => <Amigos key={amigo.id} id={amigo.id} nome={amigo.nome} perfil={amigo.perfil} titulo={amigo.titulo} amigos={props.amigos}/>) : <p style={{textAlign: "center", fontSize: "1.5rem"}}>Você não tem nenhum amigo ainda</p> }
                                </List>
                            </Box>
                        </Modal> 
                        <Modal open={pessoasModal} onClose={()=> {handleClosePessoas()}}>
                            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4, height: "90%", overflowY: "scroll"}}>
                                <h1 style={{textAlign: "center"}}>Pessoas:</h1>
                                <List>
                                    {Array.from(props.users).map(pessoa =><Pessoas key={pessoa.id} nome={pessoa.nome} perfil={pessoa.perfil} titulo={pessoa.titulo}/>)}
                                </List>
                            </Box>
                        </Modal>
                        </Fragment> }
                    </Box>
                </Box>
            </Box>

            <Box className="Postagens">
                <Box sx={{height: "7vh", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <h1>Postagens</h1>
                    <h3>{props.valueFiltro === "id" ? "Recentes" : "Relevantes"}</h3>
                </Box>

                <Box sx={{width: '100%', height: "70vh", overflowY: "scroll"}}>
                    <List sx={{width: '100%'}}>
                        {vendoResposta === true ?
                        Array.from(props.comentarios).map(comment => comment.id === post ? <Respostas key={comment.id} respostas={respostas} post={comment} users={props.users} comentarios={props.comentarios} setVendoResposta={setVendoResposta}/> : console.log) :
                        valueTipo === "1" ?
                            Array.from(props.comentarios).map(comment => <Postagens key={comment.id} id={comment.id} handleResposta={handleResposta} logado={props.logado} setOpenAviso={props.setOpenAviso} handleOpenAlert={props.handleOpenAlert} userId={comment.forum_id} descricao={comment.forum_descricao} tipo={comment.forum_tipo} titulo={comment.forum_titulo} users={props.users} curtidas={comment.forum_curtidas} getData={props.getData}/>) :
                        valueTipo === "2" ?
                            Array.from(props.comentarios).map(comment => comment.forum_tipo === "Hardware" ? <Postagens key={comment.id} id={comment.id} handleResposta={handleResposta} logado={props.logado} setOpenAviso={props.setOpenAviso} handleOpenAlert={props.handleOpenAlert} userId={comment.forum_id} descricao={comment.forum_descricao} tipo={comment.forum_tipo} titulo={comment.forum_titulo} users={props.users} curtidas={comment.forum_curtidas} getData={props.getData}/> : console.log) :
                        valueTipo === "3" ?
                            Array.from(props.comentarios).map(comment => comment.forum_tipo === "Software" ? <Postagens key={comment.id} id={comment.id} handleResposta={handleResposta} logado={props.logado} setOpenAviso={props.setOpenAviso} handleOpenAlert={props.handleOpenAlert} userId={comment.forum_id} descricao={comment.forum_descricao} tipo={comment.forum_tipo} titulo={comment.forum_titulo} users={props.users} curtidas={comment.forum_curtidas} getData={props.getData}/> : console.log) :
                        valueTipo === "4" ?
                            Array.from(props.comentarios).map(comment => comment.forum_tipo === "Programacao" ? <Postagens key={comment.id} id={comment.id} handleResposta={handleResposta} logado={props.logado} setOpenAviso={props.setOpenAviso} handleOpenAlert={props.handleOpenAlert} userId={comment.forum_id} descricao={comment.forum_descricao} tipo={comment.forum_tipo} titulo={comment.forum_titulo} users={props.users} curtidas={comment.forum_curtidas} getData={props.getData}/> : console.log) : console.log
                        } 
                    </List>
                </Box>
            </Box>

            <Box className="Pessoas" >
                <h2 style={{textAlign: "center", marginBottom: "2vh",height: "5vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Pessoas</h2>
                <Box sx={{width: '100%', height: "70vh", overflowY: "scroll"}}>
                    <List>
                        {Array.from(props.users).map(pessoa =><Pessoas key={pessoa.id} nome={pessoa.nome} perfil={pessoa.perfil} titulo={pessoa.titulo}/>)}
                    </List>
                </Box>
            </Box>

        </Box>

        <Modal open={modalPost}>
            <Box className="criarPostagem" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4}}>
                <IconButton onClick={()=>{handleCriarPostagem(2)}} sx={{position: "absolute", right: "30px"}}><Close color="primary"/></IconButton>
                
                <h1 style={{textAlign: "center", margin: "0 0 3vh 0"}}>Criar postagem</h1>

                <form style={{width: "100%",height: "35vh"}} ref={ref} onSubmit={(e)=>{publicarPost(e)}}>
                    <FormControl sx={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                        <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "80%"}}>
                                <TextField required name="titulo" sx={{width: "100%"}} label="Titulo" value={valueTitulo} onChange={(e)=>{handleTitulo(e)}}/>
                                <FormHelperText>{helpTitulo}/125</FormHelperText>
                            </Box>
                            <FormControl sx={{width: "17%"}}>
                                <InputLabel id="type">Tipo</InputLabel>
                                <Select required name="tipo" labelId="type" label="Tipo" value={valueType} onChange={(e)=>{handleSelectType(e)}}>
                                    <MenuItem value="Hardware">Hardware</MenuItem>
                                    <MenuItem value="Software">Software</MenuItem>
                                    <MenuItem value="Programacao">Programação</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <TextField required name="descricao" sx={{width: "100%"}} multiline rows={5} label="Descrição" value={valueDesc} onChange={(e)=>{handleDesc(e)}}/>
                            <FormHelperText>{helpDesc}/255</FormHelperText>
                        </Box>
                        <Button sx={{width: "100%"}} type="submit" variant="contained" disabled={helpDesc >= 256 || helpTitulo >= 126 || helpDesc <= 0|| helpTitulo <= 0||valueType===""}>Postar</Button>
                    </FormControl>
                </form>
            </Box>
        </Modal>
    </div>
}