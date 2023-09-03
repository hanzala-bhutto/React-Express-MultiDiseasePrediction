def heart_model(input_data):
    import numpy as np
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    import warnings
    warnings.filterwarnings("ignore")
    
    # loading the csv data to a Pandas DataFrame
    heart_data = pd.read_csv('heart.csv')
    
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

    if (prediction[0]== 0):
          text='The Person does not have a Heart Disease'
    else:
          text='The Person has Heart Disease'
    print(text)      
    return prediction[0]       
          
###################################################################

def get_cardiac_input():
    import mysql.connector
    
    # Connect to the MySQL database
    cnx = mysql.connector.connect(user='root', password='1234',
                              host='localhost', database='multidisease_db')

    # Create a cursor object to execute queries
    cursor = cnx.cursor()

    # Define a query to select data from the table
    query = ("SELECT * FROM heart")

    # Execute the query to select data from the table
    cursor.execute(query)

    # Fetch the selected data
    data = cursor.fetchall()

    # Close the database connection
    cnx.close()
    
    #return the latest record in list type
    return list(data[-1][:-1])

###################################################################

def set_cardiac_target(PK,y):
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
    sql = "UPDATE heart SET target = '{}' WHERE id = {}".format(y,PK)
    mycursor.execute(sql)

    # Commit the changes to the database
    mydb.commit()

    # Print the number of rows affected
    print(mycursor.rowcount, "record(s) affected")
    
###################################################################    

X=get_cardiac_input()
Primary_key=X[0]
y=heart_model(X[1:])
set_cardiac_target(Primary_key,y)

if __name__ == "__main__":
    X=get_cardiac_input()
    Primary_key=X[0]
    y=heart_model(X[1:])
    set_cardiac_target(Primary_key,y)