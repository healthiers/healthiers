import React from "react";
import recommend from "../../assets/recommendation-img.png";
import { RecommendationContent, RecommendationNFT, RecommendationText } from "./recommendationbody.styles";



const RecommendationBody = () => {

    return (

        <RecommendationContent>
            <RecommendationNFT>
                <img src={recommend} alt="recommend" />
                <h3>Diagonis: <span>Diabetics</span></h3>
                <h3>Patients Name: Edward Parker</h3>
                <h3>Age: 89</h3>
                <h3>Gender: Male</h3>
            </RecommendationNFT>
            <RecommendationText>
                <ul>
                    <li>Nutrition: Adopt a balanced and individual meal plan that alligns with your<br></br> 
                    lifestyle. Focus on whole, nutrient-dense foods,and monitor carbonhydrate <br></br> 
                    intake to manage blood sugar levels effectively</li>
                    <li>Exercise: Engage in regular physical activity to imptove insulin sensitivity <br></br>
                    and overall cardiovascular health. Incorporate a mix of aerobic exercises,<br></br> 
                    strength training, and flexibility exercises into his routine.</li>
                    <li>Medication Management: Stay delight in taking insulin and Levethyroxine as prescribed<br></br>
                     by a healthcare provider. Regularly monitor blood sugar levels and thyroid function to ensure proper<br></br>
                     dosage Adjustments if necessary</li>
                    <li>Sleep Hygeine: Priotize quality sleep by establishing a consistent sleep schedule and <br></br>
                    creating a relaxing bedtime routine. Aim for 7-9 hours of sleep each night to support<br></br>
                    overall health and diabeties management</li>
                    <li>Stress Mangement: Practice stress reduction techniques, such as mindfulness, deep breathing exercise,<br></br> 
                    or yoga to better manage stress levels and its impact on bood sugar fluctuations.</li>
                    <li>Regular Checkups: Schedule regular checkups with a healthcare team to monitor diabetes control,<br>
                    </br> thyroid function and overall health.</li>
                    <li>Support Network: Seek support from family, friends or diabetes support groups to share <br></br> 
                    experiences, knowlegde and encouragement through out your journey</li>
                    <li>Continues Learning: Stay informed about the latest diabetes management strategies,<br>
                    </br> Advancement and research to make well informed decisions about his health</li>
                    <li>Celebrate Progress: Acknowledge and celebrate small victories in diabetes management which <br>
                    </br> acn serve as poerful motivators in maintaining a positive outlook on his health journey</li>
                    <p>Its is however important to anyone with diabetes, to work closely with qualified healthcare <br></br>
                    professionals to receive personalized medical advice and create a comprehensive diabetes <br></br> 
                    management plan that best suits his specific needs and health status</p>
                </ul>
            </RecommendationText>
        </RecommendationContent>

    );
};





export default RecommendationBody;