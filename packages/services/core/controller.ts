import { Response } from 'express';

export abstract class Controller {
  protected abstract executeImpl(request: any, response: Response): Promise<void>;

  public async execute(request: any, response: Response): Promise<void> {
    try {
      await this.executeImpl(request, response);
    } catch (err) {
      this.handleError(response, err);
    }
  }

  protected sendResponse(response: Response, code: number, message?: any) {
    response.status(code).json(message);
  }

  protected handleError(response: Response, error: any) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}