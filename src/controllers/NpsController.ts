import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveyUsersRepository } from "../repositories/SurveysUsersRepository";

export class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;
    const surveysUsersRepository = getCustomRepository(SurveyUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const detractors = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    );

    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10
    );

    const passive = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    );

    const calculate =
      promoters.length - (detractors.length / surveysUsers.length) * 100;

    return response.json({
      detractors,
      promoters,
      passive,
      nps: calculate,
      total: surveysUsers.length,
    });
  }
}
