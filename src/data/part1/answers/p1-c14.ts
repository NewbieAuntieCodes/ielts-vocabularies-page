import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
  'Are there any rules for students at your school?': {
    answer: `Yes, of course. We must wear a uniform. We cannot be late. We must do our homework. I think all schools have rules.
    <br/><br/>
    In my university, there are not many rules. We can choose our clothes. But we must have rules for exams. For example, no cheating.`,
  },
  'Do you think students would benefit more from more rules?': {
    answer: `Yes, I think so. Rules help students be good. A school with good rules is safe. Students can learn better.
    <br/><br/>
    No. Too many rules are not good. Students feel stressed. They need some freedom to be creative.`,
  },
  'Have you ever had a really dedicated teacher?': {
    answer: `Yes, my high school history teacher. He loved history and made the class fun. He always helped us after class. He was a great teacher.
    <br/><br/>
    No, I don't think so. My teachers were okay. They did their job, but they were not very special.`,
  },
  'Do you prefer to have more or fewer rules at school?': {
    answer: `I prefer more rules. Rules make everything clear. It is fair for everyone. I like it when things are organized.
    <br/><br/>
    I prefer fewer rules. I like freedom. Too many rules make me feel I cannot be myself. Trust is important.`,
  },
  'Have you ever had a really strict teacher?': {
    answer: `Yes, my math teacher in middle school was very strict. We had to be quiet in her class. But I learned a lot from her.
    <br/><br/>
    No, I was lucky. My teachers were all nice. They were serious about teaching, but not too strict.`,
  },
  'Would you like to work as a teacher in a rule-free school?': {
    answer: `Yes, it sounds interesting. It would be creative. The students could learn what they like. It would be a challenge, but good.
    <br/><br/>
    No, I don't think so. Rules are important. Without rules, it would be messy. It would be hard to teach.`,
  },
};

const score5_5Answers: { [question: string]: AnswerContent } = {
  'Are there any rules for students at your school?': {
    answer: `Yes, definitely. We had a lot of rules, especially in high school. For instance, we had to wear a school uniform every day, and we weren't allowed to use our phones during class.
    <br/><br/>
    My university has fewer rules compared to my high school. They treat us more like adults. We don't have a dress code, but there are still important rules about academic honesty.`,
  },
  'Do you think students would benefit more from more rules?': {
    answer: `I think a good number of rules are helpful. They create an orderly environment where everyone can focus on learning. Clear rules help students understand what is expected.
    <br/><br/>
    No, I believe too many rules can be negative. They might stop students from thinking for themselves. It's better to have a few basic rules and encourage students to be responsible.`,
  },
  'Have you ever had a really dedicated teacher?': {
    answer: `Yes, my English teacher in high school was incredibly dedicated. She would spend extra time with students who were struggling and always provided very detailed feedback on our essays. She really inspired me.
    <br/><br/>
    I can't say that I have. Most of my teachers were competent, but I wouldn't use the word 'dedicated' to describe them. They taught the curriculum as required.`,
  },
  'Do you prefer to have more or fewer rules at school?': {
    answer: `I prefer to have a clear set of rules. It makes the environment predictable and fair for everyone. It reduces conflicts and helps everyone focus on their studies.
    <br/><br/>
    I prefer fewer rules. I think it's important for students to learn how to manage their own freedom and make good choices. Too many restrictions don't prepare you for the real world.`,
  },
  'Have you ever had a really strict teacher?': {
    answer: `Yes, my physics teacher was known for being very strict. His exams were difficult and he had high expectations for homework. While it was tough at the time, I ended up learning the subject very well.
    <br/><br/>
    No, I've been fortunate to have teachers who were more relaxed. They commanded respect through their knowledge and kindness rather than by being strict.`,
  },
  'Would you like to work as a teacher in a rule-free school?': {
    answer: `Yes, I think it would be an exciting challenge. It would allow for a more creative and student-centered approach to learning. The focus would be on curiosity rather than discipline.
    <br/><br/>
    No, absolutely not. I think that would be chaotic. A basic set of rules is essential for creating a safe and effective learning environment. Without them, it would be impossible to teach.`,
  },
};

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Are there any rules for students at your school?': {
    answer: `Of course. My high school had a comprehensive set of regulations, from a strict dress code to rules about punctuality. These were designed to maintain discipline and create a conducive learning atmosphere.
    <br/><br/>
    At the university level, the rules are less about daily conduct and more about academic integrity. For example, there are very strict policies against plagiarism to ensure that all students' work is original.`,
  },
  'Do you think students would benefit more from more rules?': {
    answer: `I believe there needs to be a balance. While some rules are necessary for order, an excessive number of them can stifle students' creativity and critical thinking. The goal should be to foster self-discipline, not just compliance.
    <br/><br/>
    No, I think that would be counterproductive. Too much regulation can lead to resentment and a lack of motivation. It's more beneficial to empower students by giving them a degree of autonomy and trusting them to act responsibly.`,
  },
  'Have you ever had a really dedicated teacher?': {
    answer: `Yes, my literature professor in university was extremely dedicated. She was passionate about her subject and she went out of her way to provide extra resources and one-on-one sessions for students who were interested. Her dedication was truly inspiring.
    <br/><br/>
    While I've had many good teachers, I can't say I've encountered one that I would describe as exceptionally dedicated. They were all professional and effective, but none stood out as going far beyond the call of duty.`,
  },
  'Do you prefer to have more or fewer rules at school?': {
    answer: `I prefer a system with fewer, but clearer, rules. I think it's more important to have guiding principles based on respect and responsibility rather than a long list of specific prohibitions. This encourages maturity.
    <br/><br/>
    I actually function better in a more structured environment, so I prefer having more rules. They eliminate ambiguity and ensure that everyone is on the same page, which I find makes for a more efficient and less stressful environment.`,
  },
  'Have you ever had a really strict teacher?': {
    answer: `Yes, my chemistry teacher was notoriously strict about lab safety and deadlines. There was no room for error. At the time it felt intense, but in hindsight, I appreciate that she instilled in us a strong sense of discipline and responsibility.
    <br/><br/>
    No, I can't say I have. My teachers have always managed to maintain classroom control and high standards through mutual respect and engaging teaching methods, rather than through strictness.`,
  },
  'Would you like to work as a teacher in a rule-free school?': {
    answer: `That's an intriguing idea. While a completely rule-free environment might be unrealistic, I would be interested in working in a school that prioritizes student autonomy and collaborative rule-making over a top-down disciplinary system.
    <br/><br/>
    No, I think that would be a recipe for disaster. Rules provide the necessary structure for learning to take place. Without clear boundaries and expectations, a classroom would likely descend into chaos, making any meaningful teaching impossible.`,
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
  'Are there any rules for students at your school?': {
    answer: `Certainly. My university has a robust code of academic conduct that all students are expected to adhere to. This covers everything from plagiarism to classroom etiquette, ensuring a respectful and fair academic environment for everyone.
    <br/><br/>
    Compared to secondary school, the rules in university are far less prescriptive regarding personal life. The emphasis shifts from controlling behavior to fostering a sense of personal responsibility and academic integrity.`,
  },
  'Do you think students would benefit more from more rules?': {
    answer: `I don't believe so. In my view, the focus should be on cultivating an intrinsic sense of responsibility rather than imposing an extensive list of external rules. Over-regulation can inhibit the development of independent judgment, which is a crucial life skill.
    <br/><br/>
    On the contrary, I think an environment with too many rules can be detrimental. It can create a culture of fear and compliance rather than one of genuine learning and curiosity. The most effective approach is to have a few core principles that are consistently upheld.`,
  },
  'Have you ever had a really dedicated teacher?': {
    answer: `Yes, I was fortunate to have a truly dedicated biology teacher in high school. Her passion for the subject was contagious, and she invested a significant amount of her personal time into creating engaging lessons and mentoring students. She's a major reason why I pursued science in university.
    <br/><br/>
    While I've had many competent and professional educators, I haven't had the experience of being taught by someone I would classify as exceptionally dedicated. My teachers were effective in their roles, but the relationship remained strictly professional.`,
  },
  'Do you prefer to have more or fewer rules at school?': {
    answer: `I advocate for fewer rules, but more principles. A school culture built on a foundation of mutual respect and a shared commitment to learning is far more powerful than one based on a long list of dos and don'ts. It encourages students to think ethically rather than just to avoid punishment.
    <br/><br/>
    I personally thrive on structure, so I appreciate a well-defined set of rules. Clear expectations reduce anxiety and create a level playing field, which allows me to focus my energy entirely on my academic work without any distractions.`,
  },
  'Have you ever had a really strict teacher?': {
    answer: `Yes, my piano teacher was incredibly strict about technique and practice discipline. She demanded perfection. It was challenging, but her rigorous approach pushed me to achieve a level of skill I wouldn't have reached on my own. I'm very grateful for her high standards.
    <br/><br/>
    No, I've never had a teacher who was overly strict. My educational experience has been characterized by teachers who were firm but fair, and who motivated students through encouragement and passion for their subject, rather than by instilling fear.`,
  },
  'Would you like to work as a teacher in a rule-free school?': {
    answer: `The concept is appealing from a philosophical standpoint. I would be drawn to an educational model based on democratic principles, where students and teachers collaboratively establish community guidelines. I think it would foster a deep sense of ownership and responsibility.
    <br/><br/>
    I believe that's a fundamentally flawed concept. A complete absence of rules would lead to anarchy, not learning. Essential rules regarding safety, respect, and conduct are the bedrock of any functioning institution, especially a school.`,
  },
};

const questions = [
  'Are there any rules for students at your school?',
  'Do you think students would benefit more from more rules?',
  'Have you ever had a really dedicated teacher?',
  'Do you prefer to have more or fewer rules at school?',
  'Have you ever had a really strict teacher?',
  'Would you like to work as a teacher in a rule-free school?',
];

export const p1c14SampleAnswers: SampleAnswerData[] = questions.map(question => {
  const versions = [];
  if (score5Answers[question]) {
    versions.push({ score: '5.0', ...score5Answers[question] });
  }
  if (score5_5Answers[question]) {
    versions.push({ score: '5.5', ...score5_5Answers[question] });
  }
  if (score6_0Answers[question]) {
    versions.push({ score: '6.0', ...score6_0Answers[question] });
  }
  if (score6_5Answers[question]) {
    versions.push({ score: '6.5', ...score6_5Answers[question] });
  }

  return {
    question,
    versions,
  };
}).filter(qa => qa.versions.length > 0);