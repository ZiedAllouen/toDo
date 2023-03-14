import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    Add(){
        return 'add page';
    }

    ShowAll(){
        return 'show all tasks page'
    }

    ShowOne(){
        return 'show specific task page'
    }

    Update(){
        return 'update page'
    }

    Delete(){
        return 'delete page'
    }
    Search(){
        return 'search page'
    }
}
