import {Request, Response} from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes {    

    public userController: UserController = new UserController();
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Create a new contact
        app.route('/user')
        .get(this.userController.addNewUser)        
        // .post(this.contactController.addNewContact);

        // app.route('/contact/:contactId')
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact);
        
        // Contact 
        // app.route('/contact') 
        // // GET endpoint 
        // .get((req: Request, res: Response) => {
        // // Get all contacts            
        //     res.status(200).send({
        //         message: 'GET request successfulll!!!!'
        //     })
        // })        
        // // POST endpoint
        // .post((req: Request, res: Response) => {   
        // // Create new contact         
        //     res.status(200).send({
        //         message: 'POST request successfulll!!!!'
        //     })
        // })

        // Contact detail
        // app.route('/contact/:contactId')
        // get specific contact
        // .get((req: Request, res: Response) => {
        // // Get a single contact detail            
        //     res.status(200).send({
        //         message: 'GET request successfulll!!!!'
        //     })
        // })
        // .put((req: Request, res: Response) => {
        // // Update a contact           
        //     res.status(200).send({
        //         message: 'PUT request successfulll!!!!'
        //     })
        // })
        // .delete((req: Request, res: Response) => {       
        // // Delete a contact     
        //     res.status(200).send({
        //         message: 'DELETE request successfulll!!!!'
        //     })
        // })
    }
}