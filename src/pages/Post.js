import React, { Component } from 'react';
import PDF from './PDF';
import './post.css';
class Post extends Component {
    state = {
        nome: '',
        contato: '',
        vendedor: '',
        prioridade: '',
        descricao: '',
        tecido: '',
        gola: '',
        golacab: '',
        golacor: '',
        manga: '',
        mangacor: '',
        pp: '',
        p: '',
        m: '',
        g: '',
        gg: '',
        exg: '',
        ppbl: '',
        pbl: '',
        mbl: '',
        gbl: '',
        ggbl: '',
        exgbl: '',
        obs: '',
        separacao: '',
        preview: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.nome || !this.state.contato){
            alert('Preencha todos os campos!');
            e.preventDefault();
        }else{
             this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    ( <div className="App">
                        <div className="area">
                                        <form method="post">
                                            <header>Ficha Técnica para Produção</header>
                                            <fieldset>
                                                <legend className="text-center header">Preencha o formulário</legend>
                                                <br/>
                                                <h3>Dados do Cliente</h3>
                                                    <input onChange={this.onChange('nome')} type="text"  name="nome" placeholder="Nome do Cliente" />
                                                    <input onChange={this.onChange('contato')} type="text" name="contato" placeholder="Contato"/>
                                                    <input onChange={this.onChange('vendedor')} type="text" name="vendedor" placeholder="Vendedor"/>
                                                    <select name="prioridade" placeholder="Prioridade" onChange={this.onChange('prioridade')} >
                                                        <option value="">Prioridade</option>
                                                        <option value="Moderado">Moderado</option>
                                                        <option value="urgente">Urgente</option>
                                                        <option value="Imediato">Imediato</option>
                                                    </select>
                                                    
                                                <h3>Informações do produto</h3>
                                                
                                                <label> Descrição: </label>
                                                    <select name="descricao" placeholder="Descrição" onChange={this.onChange('descricao')} >
                                                        <option value="Abada_tradicional">Abadá Tradicional</option>  <option value="Avental">Avental</option>
                                                        <option value="Bata_classica">Bata Clássica</option>  <option value="Bata_hospitalar_fem">Bata Hospitalar Feminina</option>
                                                        <option value="Bata_hospitalar_masculina">Bata Hospitalar Masculina</option>  <option value="Bata_longa">Bata Longa</option>
                                                        <option value="Bermuda">Bermuda</option>  <option value="Blazer_fem">Blazer Feminina</option>
                                                        <option value="Blazer_masculina">Blazer Masculina</option>  <option value="Blusao_operacional">Blusão Operacional</option>
                                                        <option value="Calca_operacional">Calça Operacional</option>  <option value="Calca_pijama">Calça Pijama</option>
                                                        <option value="Calca_social_masculina">Calça Social Masculina</option>  <option value="Calca_social_fem">Calça Social Feminina</option>
                                                        <option value="Calcao_muay_tay">Calção Muay Tay</option>  <option value="Camisa_social_manga_curta">Camisa Social Manga Curta</option>
                                                        <option value="Camisa_social_manga_longa">Camisa Social Manga Longa</option>  <option value="Camiseta_higlan">Camiseta Higlan</option>
                                                        <option value="Camiseta_manga_curta">Camiseta Manga Curta</option>  <option value="Camiseta_manga_longa">Camiseta Manga Longa</option>
                                                        <option value="Camisete">Camisete</option>  <option value="Capa_bebedouro">Capa Bebedouro</option>
                                                        <option value="Colete_esportivo">Colete Esportivo</option>  <option value="Colete_social">Colete Social</option>
                                                        <option value="Conjunto_luxo">Conjunto Luxo</option>  <option value="Dolma_fem">Dolmã Feminina</option>
                                                        <option value="Dolma_masculina">Dolmã Masculina</option>  <option value="Jaleco">Jaleco</option>
                                                        <option value="Macacao">Macacão</option>  <option value="Mascara">Máscara</option>
                                                        <option value="Saia">Saia</option>  <option value="Short_esportivo">Short Esportivo</option>
                                                        <option value="Short_esportivo_feminino">Short Esportivo Feminino</option>  <option value="Touca">Touca</option>
                                                        <option value="Vestido">Vestido</option>  <option value="wind_banner_21065">Wind Banner 210x65</option>
                                                    </select>

                                                <label> Tecido:</label>
                                                    <select name="tecido" placeholder="Escolha o tecido" onChange={this.onChange('tecido')} >
                                                        <option value="">Selecione o tipo de tecido</option>
                                                        <option value="Brim_Leve">Brim Leve</option>
                                                        <option value="Brim_Pesado">Brim Pesado</option>
                                                        <option value="Dry_Comfort">Dry Comfort</option>
                                                        <option value="Dry_Fit">Dry Fit</option>
                                                    </select>

                                                    <label> Gola: </label>
                                                    <select name="gola" placeholder="Selecione o tipo de gola" onChange={this.onChange('gola')} >
                                                        <option value="">Selecione o tipo de gola</option>
                                                        <option value="Gola_V">Gola V</option>
                                                        <option value="Gola_Polo">Gola Polo</option>
                                                        <option value="Gola_Tradicional">Gola Tradicional</option>
                                                    </select>

                                                <h3>Acabamentos e Cores</h3>
                                                    <p></p><label>Acabamento da gola: </label>
                                                    <select name="golacab" placeholder="golacabm" onChange={this.onChange('golacab')} >
                                                        <option value="Ribana">Ribana</option>
                                                        <option value="Barra">Barra</option>
                                                        <option value="Punho">Punho</option>
                                                        <option value="Gola Polo">Gola Polo</option>
                                                    </select>

                                                    <select name="golacor" placeholder="golacor" onChange={this.onChange('golacor')}>
                                                        <option value="Amarelo">Amarelo</option> <option value="Preto_c_dourado">Preto c/ Dourado</option>
                                                        <option value="Azul">Azul</option> <option value="Preto_c_verde">Preto c/ Verde</option> 
                                                        <option value="Azul_marinho">Azul Marinho</option> <option value="Preta">Preta</option>
                                                        <option value="Azul_royal">Azul Royal</option> <option value="Rosa">Rosa</option>
                                                        <option value="Branca">Branca</option> <option value="Rosa_bebe">Rosa Bebê</option>
                                                        <option value="Cinza">Cinza</option> <option value="Verde">Verde</option>
                                                        <option value="Laranja">Laranja</option> <option value="Vermelho">Vermelho</option>
                                                        <option value="Mostarda">Mostarda</option>
                                                    </select>

                                                    <p></p><label id="manga">Acabamento da manga: </label>
                                                    <select name="manga" placeholder="manga" onChange={this.onChange('manga')}>
                                                        <option value="Ribana">Ribana</option>
                                                        <option value="Barra">Barra</option>
                                                        <option value="Punho">Punho</option>
                                                        <option value="Japonesa">Japonesa</option>
                                                        <option value="Princesa">Princesa</option>
                                                        <option value="Vies">Viés</option>
                                                        <option value="Higlan">Higlan</option>
                                                        <option value="Trad">Tradicional</option>
                                                    </select>

                                                    <select name="mangacor" placeholder="Cor da Manga" onChange={this.onChange('mangacor')}>
                                                        <option value="Amarelo">Amarelo</option> <option value="Preto_c_dourado">Preto c/ Dourado</option>
                                                        <option value="Azul">Azul</option> <option value="Preto_c_verde">Preto c/ Verde</option> 
                                                        <option value="Azul_marinho">Azul Marinho</option> <option value="Preta">Preta</option>
                                                        <option value="Azul_royal">Azul Royal</option> <option value="Rosa">Rosa</option>
                                                        <option value="Branca">Branca</option> <option value="Rosa_bebe">Rosa Bebê</option>
                                                        <option value="Cinza">Cinza</option> <option value="Verde">Verde</option>
                                                        <option value="Laranja">Laranja</option> <option value="Vermelho">Vermelho</option>
                                                        <option value="Mostarda">Mostarda</option>
                                                    </select>

                                                    <h3>Grade de tamanhos / quantidades</h3>
                                                    <p></p><input type="number" placeholder="PP" name="P" onChange={this.onChange('pp')} />
                                                        <input type="number" placeholder="P" name="pp" onChange={this.onChange('p')} />
                                                        <input type="number" placeholder="M" name="m" onChange={this.onChange('m')} />
                                                        <input type="number" placeholder="G" name="g" onChange={this.onChange('g')} />
                                                        <input type="number" placeholder="GG" name="gg" onChange={this.onChange('gg')} />
                                                        <input type="number" placeholder="EXG" name="exg" onChange={this.onChange('exg')}  />
                                                    <p></p><input type="number" placeholder="PPBL" name="ppbl" onChange={this.onChange('ppbl')} />
                                                        <input type="number" placeholder="PBL" name="pbl" onChange={this.onChange('pbl')} />
                                                        <input type="number" placeholder="MBL" name="mbl" onChange={this.onChange('mbl')} />
                                                        <input type="number" placeholder="GBL" name="gbl" onChange={this.onChange('gbl')} />
                                                        <input type="number" placeholder="GGBL" name="ggbl" onChange={this.onChange('ggbl')} />
                                                        <input type="number" placeholder="EXGBL" name="exgbl" onChange={this.onChange('exgbl')}  />

                                                    <h3>Observações/Particularidades</h3>
                                                        <textarea name="obs" cols="30" rows="10" onChange={this.onChange('obs')}></textarea>

                                                        <h3>Processo</h3>
                                                        <select name="separacao" placeholder="Separação" onChange={this.onChange('separacao')}>
                                                            <option value="separaca">Separação</option>
                                                            <option value="corte">Corte</option>
                                                            <option value="subl">Subl</option>
                                                            <option value="bord">Bord</option>
                                                        </select>

                                                        <h3>Pré-visualização</h3>
                                                        <input onChange={this.onChange('preview')} type="text" name="preview" placeholder="Link da imagem"/>

                                            </fieldset>
                                            <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Gerar relatório</button>
                                        </form>
                                    </div>
                </div>) : (
                        <PDF nome={this.state.nome} contato={this.state.contato} vendedor={this.state.vendedor} relatorio={this.state.relatorio} prioridade={this.state.prioridade} descricao={this.state.descricao} tecido={this.state.tecido} gola={this.state.gola} golacab={this.state.golacab} golacor={this.state.golacor} manga={this.state.manga} mangacor={this.state.mangacor} pp={this.state.pp} p={this.state.p} m={this.state.m} g={this.state.g} gg={this.state.gg} exg={this.state.exg} ppbl={this.state.ppbl} pbl={this.state.pbl} mbl={this.state.mbl} gbl={this.state.gbl} ggbl={this.state.ggbl} exgbl={this.state.exgbl} obs={this.state.obs} separacao={this.state.separacao} preview={this.state.preview} />
                    )
                }
            </>
        );
    }
}

export default Post;