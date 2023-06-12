import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offilne';

    getServerStatus(){
        return this.serverStatus;
    }
}