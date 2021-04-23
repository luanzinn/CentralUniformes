import React from 'react';
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom"

const ref = React.createRef();
const today = new Date();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div id="hum">Central Uniformes</div>
          <div id="hdois">FICHA TÉCNICA PARA PRODUÇÃO</div>
            <div id="htres">DADOS DO CLIENTE</div>
            <br/>
            <table class="bytable">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Contato</th>
                <th>Prioridade</th>
                <th>Vendedor</th>    
                </tr>
            </thead>

            <tbody>
                <tr>
                 <td>{props.nome}</td>
                 <td>{props.contato}</td>   
                 <td>{props.prioridade}</td>
                 <td>{props.vendedor}</td>
                 </tr>
            </tbody>
        </table>

        <div id="htres">INFORMAÇÕES DO PRODUTO</div>
        <br/>
        <table class="bytable">
             <thead>
                <th>Descrição</th>
                <th>Tecido</th>
                <th>Gola</th>
             </thead>
             <tbody>
                <td>{props.descricao}</td>
                <td>{props.tecido}</td>
                <td>{props.gola}</td>
             </tbody>
        </table>
        
        <div id="htres">ACABAMENTOS E CORES</div>
        <br/>
        <table class="bytable">
            <thead>
                <th>Gola</th>
                <th>Manga</th>
            </thead>
            <tbody>
                <td>{props.golacab}</td>
                <td>{props.manga}</td>
                <tr>
                <td>{props.golacor}</td>
                <td>{props.mangacor}</td>
                </tr>
            </tbody>
        </table>

        <div id="htres">GRADE DE TAMANHOS E QUANTIDADES</div>
        <br/>
        <table class="bytable">
            <thead>
                <th>P</th>
                <th>PP</th>
                <th>M</th>
                <th>G</th>
                <th>GG</th>
                <th>EXG</th>
            </thead>
            <tbody>
                <td>{props.pp}</td>
                <td>{props.p}</td>
                <td>{props.m}</td>
                <td>{props.g}</td>
                <td>{props.gg}</td>
                <td>{props.exg}</td>
            <tr>
                <th>PBL</th>
                <th>PPBL</th>
                <th>MBL</th>
                <th>GBL</th>
                <th>GGBL</th>
                <th>EXGBL</th>
            </tr>
            <tr>
                <td>{props.ppbl}</td>
                <td>{props.pbl}</td>
                <td>{props.mbl}</td>
                <td>{props.gbl}</td>
                <td>{props.ggbl}</td>
                <td>{props.exgbl}</td>
            </tr>
            </tbody>
        </table>

        <div id="htres">Observações</div>
        <br/>
        <table class="bytable">
        <thead>
            <th>Peculiaridades/Obs</th>
        </thead>
        <tbody>
        <td>{props.obs}</td>
        </tbody>
        </table>

        <div id="htres">Fase do processo</div>
        <br/>
        <table class="bytable">
          <thead>
            <th>Fase:</th>
          </thead>
          <tbody>
            <td>{props.separacao}</td>
          </tbody>
        </table>

          <br/>
        <img src={props.preview} alt="Pre-visualizacao" width="320" height="205" />
        </div>
      <Pdf targetRef={ref} filename="relatorio.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Gerar PDF</button>}

      </Pdf>
    </>
  );
}

export default PDF;