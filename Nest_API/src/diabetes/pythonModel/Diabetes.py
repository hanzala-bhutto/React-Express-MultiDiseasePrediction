def diabetes_model(input_data):
    import numpy as np
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn import svm
    import warnings
    warnings.filterwarnings("ignore")
    
    # loading the diabetes dataset to a pandas DataFrame
    diabetes_dataset = pd.read_csv('src/diabetes/pythonModel/diabetes.csv') 
    
    # separating the data and labels
    X = diabetes_dataset.drop(columns = 'Outcome', axis=1)
    Y = diabetes_dataset['Outcome']
    
    X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size = 0.2, stratify=Y, random_state=2)
    
    classifier = svm.SVC(kernel='linear')
    
    #training the support vector Machine Classifier
    classifier.fit(X_train, Y_train)
    
    
    # changing the input_data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the array as we are predicting for one instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = classifier.predict(input_data_reshaped)

    # if (prediction[0] == 0):
    #     text='The person is not diabetic'
    # else:
    #     text='The person is diabetic'
    # print(text)
    return prediction[0]     
          
###################################################
import sys
import json
if __name__ == "__main__":
    X=json.loads(sys.argv[1])
    # print(X)
    X=X[:-1]
    y=diabetes_model(X)
    print(y)