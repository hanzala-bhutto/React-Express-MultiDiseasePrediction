def diabetes_model(input_data):
    import numpy as np
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn import svm
    import warnings
    warnings.filterwarnings("ignore")
    
    # loading the diabetes dataset to a pandas DataFrame
    diabetes_dataset = pd.read_csv('diabetes.csv') 
    
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

    if (prediction[0] == 0):
        text='The person is not diabetic'
    else:
        text='The person is diabetic'
    print(text)
    return prediction[0]     
          
###################################################

def get_diabetes_input():
    import mysql.connector
    # Connect to the MySQL database
    cnx = mysql.connector.connect(user='root', password='1234',
                              host='localhost', database='multidisease_db')

    # Create a cursor object to execute queries
    cursor = cnx.cursor()

    # Define a query to select data from the table
    query = ("SELECT * FROM diabetes")

    # Execute the query to select data from the table
    cursor.execute(query)

    # Fetch the selected data
    data = cursor.fetchall()

    # Close the database connection
    cnx.close()
    
    #return the latest record in list type
    return list(data[-1][:-1])
    
###################################################

def set_diabetes_target(PK,y):
    import mysql.connector

    # Connect to the database
    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
    database="multidisease_db"
    )

    # Create a cursor object to execute SQL queries
    mycursor = mydb.cursor()

    # Update the column
    sql = "UPDATE diabetes SET outcome = '{}' WHERE id = {}".format(y,PK)
    mycursor.execute(sql)

    # Commit the changes to the database
    mydb.commit()

    # Print the number of rows affected
    print(mycursor.rowcount, "record(s) affected")

###################################################


if __name__ == "__main__":
    X=get_diabetes_input()
    Primary_key=X[0]
    X=X[1:]
    y=diabetes_model(X)
    set_diabetes_target(Primary_key,y)