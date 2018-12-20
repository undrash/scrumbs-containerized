




import {CoreEntity} from "./CoreEntity";
import {IProxy} from "./IProxy";
import {IProxyVO} from "./IProxyVO";

export class Proxy extends CoreEntity implements IProxy {
    protected address: string;
    protected static token: string;
    protected static tokenExpires: Date;
    protected static VO: IProxyVO;





    constructor(proxyName:string, address: string) {
        super( proxyName );
        this.address = address;
    }



    public getVO(): IProxyVO {
        return Proxy.VO;
    }



    protected setVO(vo: IProxyVO): void {
        Proxy.VO = vo;
    }



    protected httpRequest(method: string, endpoint: string, data: any, success: Function, failure: Function): XMLHttpRequest {

        let xhr = new XMLHttpRequest();

        xhr.open( method, this.address + endpoint, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        if ( Proxy.token ) xhr.setRequestHeader('Authorization', Proxy.token );


        xhr.onload = () => {

            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        if ( data ) {
            xhr.send( JSON.stringify( data ) );
        } else {
            xhr.send();
        }

        return xhr;
    }


}