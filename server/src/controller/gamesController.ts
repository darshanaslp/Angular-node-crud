import { Request , Response} from 'express';

import pool from '../database'

class GamesController {
    public async list (req:Request, res:Response) {
       const games =  await pool.query('SELECT * from games ');
        res.json(games);  
    }

    public async getone (req:Request, res:Response): Promise<any>{
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
        
    }

    public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body);
        await pool.query('INSERT INTO games set ?',[req.body])
        res.json({text: 'Games Saved'})
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

export const gamesController = new GamesController();
export default gamesController;