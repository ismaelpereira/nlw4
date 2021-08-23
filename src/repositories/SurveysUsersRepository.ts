import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
export class SurveyUsersRepository extends Repository<SurveyUser> {}
