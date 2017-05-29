import React from 'react'
import CreateReactClass from 'create-react-class'
import bibtexParse from 'bibtex-parse-js'


var BibPhdThesis = CreateReactClass({
  render: function(){
    var tags = this.props.entry.entryTags;
    return <div><span>{tags.author}</span>. <span style={{fontWeight: 'bold'}}>{tags.title}</span>. Ph.D Thesis ({tags.year})</div>
  }
})

var BibArticle = CreateReactClass({
    render: function(){
      var tags = this.props.entry.entryTags;
      return <div><span>{tags.author}</span>. <span style={{fontWeight: 'bold'}}>{tags.title}</span> in <span style={{fontStyle: 'italic'}}>{tags.journal} {tags.volume}({tags.volume}):{tags.pages}</span>, <span>{tags.year}</span></div>
    }
})

var BibInProceedings = CreateReactClass({
    render: function(){
      var tags = this.props.entry.entryTags;
      return <div><span>{tags.author}</span>. <span style={{fontWeight: 'bold'}}>{tags.title}</span> in <span style={{fontStyle: 'italic'}}>{tags.booktitle}</span>. Pages <span>{tags.pages}</span>. <span>{tags.address}</span> <span>{tags.year}</span></div>
    }
})

export default CreateReactClass({

  getInitialState: function(){
    return {
      elements: this.buildElements(this.props.bibtex)
    }
  },

  buildElements: function(bibtex){
        var bibJSON = bibtexParse.toJSON(bibtex);
        var elements = [];
        for(var i=0;i<bibJSON.length;i++){
              var et = bibJSON[i].entryType.toLowerCase();
              if(et=="inproceedings"||et=="conference"){
                elements.push(<li key={i}><BibInProceedings entry={bibJSON[i]} /></li>);

              }
              else if (et=="article"){
                elements.push(<li key={i}><BibArticle entry={bibJSON[i]} /></li>);
              }
              else if(et=="phdthesis"){
                elements.push(<li key={i}><BibPhdThesis entry={bibJSON[i]} /></li>);
              }
              else if(et=="book"){

              }
              else if(et=="booklet"){

              }
              else if(et=="inbook"){

              }
              else if(et=="incollection"){

              }
              else if(et=="manual"){

              }
              else if(et=="mastersthesis"){

              }
              else if(et=="misc"){

              }
              else if(et=="proceedings"){

              }
              else if(et=="techreports"){

              }
              else if(et=="unpublished"){

              }
        }
        return elements;
  },

  render: function() {
    return <ol>
        {this.state.elements}
    </ol>
  }
})
