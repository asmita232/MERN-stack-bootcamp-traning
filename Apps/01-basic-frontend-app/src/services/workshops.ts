
import IWorkshop from '../models/IWorkshop'

export default function workshops(){
    fetch( `http://workshops-server.herokuapp.com/workshops` )
    .then(function( response: Response ) {
        return response.json();
    })
    .then(function( workshops: IWorkshop[] ) {
        console.log( workshops );
        
        const tbody = <HTMLElement> document.querySelector( 'tbody' );
        
        // go through workshops array and form HTML within tbody
        workshops.forEach(function( workshop : IWorkshop ) {
            tbody.innerHTML += `<tr>
                <td>
                    <img src="${workshop.imageUrl}" style="width: 200px;" />
                </td>
                <td>${workshop.name}</td>
                <td>${workshop.location.city}</td>
            </tr>`;
        });
    })
    .catch(function( error ) {
        console.log( error.message );
    });
}

