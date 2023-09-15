def heart_model(input_data):
    import numpy as np
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    import warnings
    warnings.filterwarnings("ignore")
    
    # loading the csv data to a Pandas DataFrame
    heart_data = pd.read_csv('src/heart/pythonModel/heart.csv')
    
    X = heart_data.drop(columns='target', axis=1)
    Y = heart_data['target']
    
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)
    
    model = LogisticRegression()
    
    # training the LogisticRegression model with Training data
    model.fit(X_train, Y_train)
    
    # change the input data to a numpy array
    input_data_as_numpy_array= np.asarray(input_data)

    # reshape the numpy array as we are predicting for only on instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = model.predict(input_data_reshaped)

#     if (prediction[0]== 0):
#           text='The Person does not have a Heart Disease'
#     else:
#           text='The Person has Heart Disease'
#     print(text)      
    return prediction[0]       
          

import sys
import json
if __name__ == "__main__":
    X=json.loads(sys.argv[1])
    Primary_key=X[0]
    y=heart_model(X)
    print(y)