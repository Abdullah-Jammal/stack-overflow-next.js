import z from 'zod'

export const QuestionsSchema = z.object({
    title : z.string().min(5, {message : 'Must be mpre than 5 charectors !'}).max(130, {
        message : 'Can not be more than 130 char'
    }),
    explanation : z.string().min(100),
    tags : z.array(z.string().min(1).max(15)).min(1).max(3)
  });
